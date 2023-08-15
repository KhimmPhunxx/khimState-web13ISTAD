import React, { useEffect, useState } from 'react'
import { products } from './../data/product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCatories, fetchAllProducts } from '../redux/actions/ProductActions';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import Loading from '../components/Loading';


export default function About() {
    // const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch()
    // const {products} = useSelector(state => state.prodReducer)
    const {categories} = useSelector(state => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
       
    useEffect(() => {
      dispatch(fetchAllCatories())
    }, [])
  return (
   
   <main>

    {
      console.log(categories && categories)
    }
    {/* Fect API products */}
    <h1 className="text-3xl font-bold text-center dark:text-white mb-2">Get shopping</h1>
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
                            categories.map((categ) => (
                              <div>
                                <Link>
                                <Card
                                imageURL={categ.image}
                                desc={categ.name}
                                />

                                </Link>
                              </div>
                            ))
                           }
                           
                    </div>
   </main>

  )
}
