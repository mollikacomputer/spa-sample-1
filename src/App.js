import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import {Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </div>
  );
}

export default App;
