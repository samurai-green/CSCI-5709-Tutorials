import * as stylex from '@stylexjs/stylex';
import './App.css'

import LoginPage from './pages/loginPage';

function App() {

  return (
    <>
      <div {...stylex.props(styles.container)}>
        <LoginPage />
      </div>
    </>
  )
}

const styles = stylex.create({
  container: {
    margin: 0,
    padding: 0,
    height: '100vh',
    width: '100%',
  }
});

export default App
