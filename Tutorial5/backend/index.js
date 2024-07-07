const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb+srv://sidhu97ss:incorrectPassword@cluster1.2chpe4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error)
})

const Document = new mongoose.Schema({
    email: String,
    firstName: String,
})

const User = mongoose.model('data', Document)

// GET /users route
app.get('/users', async (req, res) => {
    try {
        const users = await User.find()

        users.reduce((acc, user) => [
            ...acc,
            {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
            }
        ], [])

        res.json({
            message: 'Users retrieved',
            success: true,
            users
        })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message})
    }
})

// PUT /update/:id route
app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { email, firstName } = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, { email, firstName }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            message: 'User updated',
            success: true
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

// POST /add route
app.post('/add', async (req, res) => {
    try {
        const { email, firstName } = req.body;

        console.log('email:', email, 'firstName:', firstName);

        const newUser = new User({ email, firstName });
        await newUser.save();

        res.json({
            message: 'User added',
            success: true
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});

// GET /user/:id route
app.get('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            success: true,
            user: {
                email: user.email,
                firstName: user.firstName,
                id: user._id
            }
        });
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000')
})