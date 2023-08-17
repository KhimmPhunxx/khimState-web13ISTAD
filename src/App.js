
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
import Contactus from './pages/Contactus';
import reportWebVitals from './reportWebVitals';
import NotFoundPage from './pages/NotFoundPage';
import Book from './pages/Book';
import LoginForm from './pages/LoginForm';
import Profile from './pages/Profile';


function App() {
  console.log(products)
  return (
   <>
      <Routes>
        <Route path='/' element={<MainnLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/about-us' element={<About />}/>
          <Route path='/create' element={<ProductForm edit={false}/>} />
          <Route path='/edit' element={<ProductForm edit={true}/>} />
          <Route path='/datatable' element={<Dashboard />} />
          <Route path='/contactpage' element={<Contactus />} />
          <Route path='/*' element={<NotFoundPage />} />
          <Route path='/booking' element={<Book />} />
          <Route path='/profile' element={<Profile />}/>
        </Route>
         <Route path='/loginform' element={<LoginForm />} />
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
