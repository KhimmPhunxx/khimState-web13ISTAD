import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/ProductActions'
import Card from '../components/card'
import { Link } from 'react-router-dom';
import Loading from './../components/Loading';
import dev from "./../lottiefile/animation_lldnhdo7.json"
import { useLottie } from 'lottie-react';

export default function Book() {
    // const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
        const options = {
          animationData: dev,
          loop: true
        };
      
        const { View } = useLottie(options);
       
    
    useEffect(() => {
        // Subscribe to Store
        dispatch(fetchAllProducts())
       
    }, [])

    return (
       <main>
        {
            console.log(products && products)
        }
         {/* Fect API products */}
                    <h1 className="text-3xl font-bold text-center dark:text-white mb-2">Get Booking</h1>
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
                    <section>
                       
                    </section>
       </main>
    )
}
