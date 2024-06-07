import * as stylex from '@stylexjs/stylex';
import LoginForm from '../components/loginForm';

const LoginPage = props => {
    return (
        <div {...stylex.props(styles.container)} >
            <LoginForm />
        </div>
    )
}

const styles = stylex.create({
    container: {
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
        gridTemplateAreas: 'hero form',
        border: '1px solid black',
    },
});

export default LoginPage