import { useRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import RegisterForm from './registerForm';

const LoginForm = props => {
    const dialogRef = useRef();
    return (
        <>
        <div {...stylex.props(styles.container)}>
            <div {...stylex.props(styles.formCard)}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Login</h2>
                </div>
                <form {...stylex.props(styles.loginForm)}>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"></input>
                <button type="submit" style={{fontSize: '1rem'}} >Login</button>
                </form>
                <button onClick={
                    () => {
                        dialogRef.current.showModal();
                    }
                } style={{color: '#21a179', fontSize: '1rem'}}>Register</button>
            </div>

            <RegisterForm regFormRef={dialogRef} />

        </div>
        </>
    )
}

const styles = stylex.create({
    container: {
        gridArea: 'form',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
    },
    formCard: {
        backgroundColor: '#e8e9eb',
        display: 'grid',
        gap: '1rem',
        padding: '40px',
        margin: '3rem',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        transform: 'translate(0%, -30%)',
    },
    loginForm: {
        display: 'grid',
        gap: '1rem',
    },
    registrationForm: {
        display: 'grid',
        gap: '1rem',
    }
});

export default LoginForm;