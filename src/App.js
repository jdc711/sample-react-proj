import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='nav-bar'>
          <Link to="/">Home</Link>
          <Link to="profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile />}>
            <Route index element={<ProfileDetails/>} />
            <Route path="settings" element={<ProfileSettings/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
