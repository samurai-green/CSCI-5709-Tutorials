import * as stylex from '@stylexjs/stylex';

const ProfilePage = () => {
    return (
        <div {...stylex.props(styles.container)}>
        <h1 style={{color: 'white'}}>Hi this is <strong style={{ color: 'hotpink' }}>Sid</strong>'s profile</h1>
        </div>
    )
}

const styles = stylex.create({
    container: {
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ProfilePage;