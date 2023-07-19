import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import { products } from './data/product';
import Home from './pages/Home';


function App() {
  console.log(products)
  return (
   <>
   <Home />
     <div className="grid content max-w-7xl mx-auto gap-4 md-grid  grid-cols-4 flex">
        {
         products.map((product) => (
            <div key={product.id}>
              <Card
              imageURL={product.images[0]}
              titlee={product.title}
              desc={product.description}
              pricee={product.price}
              categor={product.category.name}
            />
            </div>
         ))
        }
     </div>
     </>
  );
}

export default App;
