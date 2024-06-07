import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';

const onClose = (regFormRef) => {
    regFormRef.current.close();
}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const isValidName = (name) => {
    return /^[a-zA-Z]+$/.test(name);
}

const isValidPassword = (password) => {
    return password.length >= 8 && /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/.test(password);
}

const RegisterForm = ({style, regFormRef}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(!isValidName(e.target.value));
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setLastNameError(!isValidName(e.target.value));
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(!isValidEmail(e.target.value));
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(!isValidPassword(e.target.value));
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(e.target.value !== password);
    }

    return (
        <>
            <dialog ref={regFormRef} style={{ borderRadius: '10px', padding: '40px' }}>
                <div>
                    <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                        <button onClick={() => onClose(regFormRef)} {...stylex.props(styles.closeButton)}>x</button>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', padding: 0, margin: 0}}>
                        <h2>Registration</h2>
                    </div>
                    <form action="dialog" {...stylex.props(styles.registerForm)}>
                        <label for="firstName">First Name:</label>
                        
                        {firstNameError && <p style={{color: 'red', padding: 0, margin: 0}}>Please enter a valid name.</p>}
                        
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange}></input>
                        <label for="lastName">Last Name:</label>

                        {lastNameError && <p style={{color: 'red', padding: 0, margin: 0}}>Please enter a valid name.</p>}

                        <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange}></input>
                        <label for="email">Email:</label>

                        {emailError && <p style={{color: 'red', padding: 0, margin: 0}}>Please enter a valid email.</p>}

                        <input type="text" id="email" name="email" value={email} onChange={handleEmailChange}></input>
                        <label for="password">Password:</label>

                        {passwordError && <p style={{color: 'red', padding: 0, margin: 0}}>Password must be at least 8 characters</p>}

                        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}></input>
                        <label for="confirm_password">Confirm Password:</label>

                        {confirmPasswordError && <p style={{color: 'red', padding: 0, margin: 0}}>Passwords do not match</p>}

                        <input type="password" id="confirm_password" name="confirm_password" value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
                        <button style={{ fontSize: '1rem', margin: '2rem 0 0 0' }}>Register</button>
                    </form>
                </div>
           </dialog>
        </>
    )
}

const styles = stylex.create({
    closeButton: {
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        outline: 'none',
        transition: 'background-color 0.3s',
        borderRadius: '50%',
        height: '2.4rem',
        width: '2.4rem',
        ':hover': {
            backgroundColor: 'lightgray',
        },
    },
    registerForm: {
        display: 'grid',
        gap: '0.7rem',
    }
});

export default RegisterForm;