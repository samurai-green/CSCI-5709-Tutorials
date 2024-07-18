const mongoose = require('./db');
const User = require('./models/user');

// Insert records
const insertRecords = async () => {
	const users = [
		{ name: 'Alice', email: 'alice@mail.com', age: 30 },
		{ name: 'Bob', email: 'bob@example.com', age: 25 },
		{ name: 'Charlie', email: 'charlie@mail.com', age: 35 },
	];

	try {
		const result = await User.insertMany(users);
		console.log('Records inserted successfully:', result);
		return result[0]._id; // Return the ObjectId of the first inserted record
	} catch (err) {
		console.error('Error inserting records:', err);
	}
};

// Retrieve records
const retrieveAllRecords = async () => {
	try {
		const users = await User.find();
		console.log('All records:', users);
	} catch (err) {
		console.error('Error retrieving records:', err);
	}
};

// Update record
const updateRecord = async (id, newAge) => {
	try {
		const result = await User.findByIdAndUpdate(id, { age: newAge }, { new: true });
		console.log('Record updated successfully:', result);
	} catch (err) {
		console.error('Error updating record:', err);
	}
};

// Retrieve record
const retrieveRecord = async (id) => {
	try {
		const user = await User.findById(id);
		console.log('Record retrieved:', user);
	} catch (err) {
		console.error('Error retrieving record:', err);
	}
};


// Retrieve records with a specific email domain
const retrieveRecordsByEmailDomain = async (domain) => {
	try {
		const regex = new RegExp(`@${domain}$`);
		const users = await User.find({ email: { $regex: regex } });
		console.log(`Records with email domain ${domain}:`, users);
	} catch (err) {
		console.error('Error retrieving records by email domain:', err);
	}
};

// driver code

const main = async () => {
	const userId = await insertRecords();
	await retrieveAllRecords();
	// Update user with the specified ID to age 32
	await updateRecord(userId, 32); 
	// Retrieve users with the email domain 'example.com'
	await retrieveRecordsByEmailDomain('mail.com'); 
	// Retrieve user with the specified ID
	await retrieveRecord(userId); 

	mongoose.connection.close();
};

main();

