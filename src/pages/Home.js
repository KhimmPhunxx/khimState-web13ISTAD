// state is variable stock data and data is rendom
import React, {useEffect} from "react"
import Card from "../components/card"
import Loading from "../components/Loading"
import { Link } from 'react-router-dom';
import { fetchProducts } from "../services/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { products } from './../data/product';
import { fetchAllProducts } from "../redux/actions/ProductActions";

export default function Home(){

    // const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
    useEffect(() => {
        // subscribe to store
        dispatch(fetchAllProducts())

    }, [])
    
     return(
        <>
            <main>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a> 
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <lottie-player src="https://lottie.host/fa30aba8-5eeb-4cdf-9cd4-64a2d6048a3c/oSI7lqg5R3.json" background="#FFFFFF" speed=".5"loop autoplay direction="1" mode="normal"></lottie-player>
                    </div>                
                </div>
            </section>
               
                <div className="max-w-7xl mx-auto">
                    {
                        console.log(products && products)
                    }
                    {/* Fect API products */}
                    
                    <h1 className="text-3xl font-bold text-center dark:text-white mb-2">Get products</h1>
                    <p className="flex justify-center ">
                        <h1 className="text-white max-w-sm rounded-lg  bg-black p-3 mb-3">
                        [GET] https://api.escuelajs.co/api/v1/products
                        </h1>
                    </p>
                    <div className="grid content max-w-7xl mx-auto gap-4 md-grid  grid-cols-4 flex"> 
                    
                        {
                            isLoading ?
                            <>
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            <Loading />
                            </>
                            :
                          products.map((product) => (
                            <div key={product.id}>
                                <Link to={`/read/${product.id}`}>
                                <Card 
                                imageURL={product.images[0]}
                                desc={product.description}
                                />
                                </Link>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </main>     
        </>
    )
}

