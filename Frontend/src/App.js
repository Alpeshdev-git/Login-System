
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Login/>
    </div>
  );
}

export default App;
