
import './App.css';
import { products } from './data/product';
import Home from './pages/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import Read from './pages/Read';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import Dashboard from './pages/Dashboard';
import FormLogin from './pages/FormLogin';
import Contactus from './pages/Contactus';


function App() {
  console.log(products)
  return (
   <>

      <Routes>
        <Route path='/' element={<MainnLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/about-us' element={<About />}/>
          <Route path='/create' element={<ProductForm />} />
          <Route path='/datatable' element={<Dashboard />} />
          <Route path='/contactpage' element={<Contactus />} />
        </Route>
        <Route path='/loginform' element={<FormLogin /> } />
      </Routes>
     </>
  );
}
export default App;

function MainnLayout(){
  return(
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
  )
}
