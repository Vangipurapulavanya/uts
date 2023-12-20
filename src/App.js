
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Events from './Components/Events/Event';
import Careers from './Components/Careers/Careers';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Product'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path= '/' exact Component={Home}/>
        <Route path= '/about' exact Component={About}/>
        <Route path= '/products' exact Component={Products}/>
        <Route path= '/events' exact Component={Events}/>
        <Route path= '/careers' exact Component={Careers}/>
        <Route path= '/contact' exact Component={Contact}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
