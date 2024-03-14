import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Header';
import UserLogin from './UserLogin';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>Training and Placement </h1>
      <Routes>
      <Route path="/UserLogin" element={<UserLogin />} />
      <Route path="/Register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
