import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import { products } from './data/product';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Read from './pages/Read';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';

function App() {
  console.log(products)
  return (
   <>
   <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/about-us' element={<About />}/>
        <Route path='/create' element={<ProductForm />} />
      </Routes>
    <Footer />
     </>
  );
}

export default App;
