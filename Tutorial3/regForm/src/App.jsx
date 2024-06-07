import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as stylex from '@stylexjs/stylex';
import './App.css'

import LoginPage from './pages/loginPage';
import ProfilePage from './pages/profilePage';

function App() {

  return (
    <div {...stylex.props(styles.container)}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
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
