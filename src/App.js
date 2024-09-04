
import './App.css';
import { Login } from './Components/LoginForm/Login';
import {Home} from './Components/LoginForm/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
