import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login'; // We will create this component
import Signup from './Signup'; // We will create this component
import 'bootstrap/dist/css/bootstrap.min.css';
import './MelodyVerse.css';
import './App.css'; // You can remove this if not using local CSS

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Connectverse</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-5">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<h2>Welcome to Connectverse!</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;