import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import Edit from './components/edit';
import Add from './components/add';
import Search from './components/search';
import Login from './components/login';
import Logout from './components/Logout';
import Protected from './components/Protected';
function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Protected><Home /></Protected>} />
          <Route path="/add" element={<Protected><Add /></Protected>} />
          <Route path="/search" element={<Protected><Search /></Protected>} />
          <Route path="/edit/:id" element={<Protected><Edit /></Protected>} />
        </Routes>
      </Router>


    </div>

  );
}

export default App;
