// state is variable stock data and data is rendom
import React, { useDebugValue, useEffect, useState } from "react"
import Card from "../components/card"
import Loading from "../components/Loading"
import { Link } from 'react-router-dom';
import { fetchProducts } from "../services/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { products } from './../data/product';
import { fetchAllProducts } from "../redux/actions/ProductActions";

export default function Home(){

    const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.prodReducer)
    useEffect(() => {
        // subscribe to store
        dispatch(fetchAllProducts())

        // call to API
        // fetchProducts()
        // .then(resp => {
        //     setLoading(false)
        //     setProducts(resp)
        // })
    }, [])

    // const fetchProducts = () => {
    //     fetch("https://api.escuelajs.co/api/v1/products?limit=28&offset=1")
    //     .then(res => res.json())
    //     .then(resp => {
    //         setProducts(resp)
    //         setLoading(false)
    //     })
    // }
       
     return(
        <>
            <main>
                <div className="max-w-7xl mx-auto">
                    {
                        console.log(products && products)
                    }
                    {/* Fect API products */}
                    {/* <h1 className="text-3xl font-bold text-center dark:text-white mb-2">Get products</h1>
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
                            </>
                            :
                            products.map((pro) => (
                                <div key={pro.id}>
                                    <Link to={`/read/${pro.id}`}>
                                    <Card
                                    imageURL={pro.images[0]}
                                    desc={pro.description}
                                    pricee={pro.price+"$"}
                                    />
                                    </Link>
                                </div>
                            ))
                        }
                    </div> */}
                </div>
            </main>     
        </>
    )
}

