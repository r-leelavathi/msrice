import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/'Component={Home} />
    <Route path='/about'Component={About} />
    <Route path='/product'Component={Products} />
    <Route path='/contact'Component={Contact} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   </div>
  );
}

export default App;
