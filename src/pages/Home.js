// state is variable stock data and data is rendom
import React, { useEffect, useState } from "react"
import Card from "../components/card"

import Loading from "../components/Loading"

export default function Home(){
    // Declare Variable
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [userr, setUser] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchProducts = () => {
        fetch("https://api.escuelajs.co/api/v1/products?limit=28&offset=1")
        .then(res => res.json())
        .then(resp => {
            setProducts(resp)
            setLoading(false)
        })
    }
    useEffect(() => {
        // call to API
        fetchProducts()
    }, [])

    const fectCategory = () => {
        fetch("https://api.escuelajs.co/api/v1/categories")
        .then(res => res.json())
        .then(resp => setCategory(resp))
    }
    useEffect(() => {
        fectCategory()
    }, [])

    const fectUser = () => {
        fetch("https://api.escuelajs.co/api/v1/users")
        .then(res => res.json())
        .then(resp => setUser(resp))
    }
    useEffect(() => {
        fectUser()
    }, [])

    return(
        <>
            <main>
                <div className="max-w-7xl mx-auto">
                    {/* <h1 className="text-4xl text-blue-500 text-center">You Clicked {count} time </h1>
                    <div className="flex justify-center">
                    <button  onClick={() => setCount(count + 1)} type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-500 dark:text-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Click This</button>

                    </div> */}

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
                            </>
                            :
                            products.map((pro) => (
                                <div key={pro.id}>
                                    <Card
                                    imageURL={pro.images[0]}
                                    desc={pro.description}
                                    pricee={pro.price+"$"}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    {/* fetch API categories */}
                    <h1 className="text-3xl font-bold text-center mb-2 text-white">Get categories</h1>
                    <p className="flex justify-center ">
                    <h1 className="text-white max-w-sm rounded-lg  bg-black p-3 mb-3">
                    [GET] https://api.escuelajs.co/api/v1/categories
                    </h1>
                    </p>
                    <div className="grid content max-w-7xl mx-auto gap-4 md-grid  grid-cols-4 flex"> 
                    
                        {
                            category.map((cat) => (
                                <div key={cat.id}>
                                    <Card
                                    imageURL={cat.image}
                                    desc={cat.name}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    
                    {/* fetch API Users */}
                    <h1 className="text-3xl font-bold text-center mb-2 text-white">Get users</h1>
                    <p className="flex justify-center ">
                    <h1 className="text-white max-w-sm rounded-lg  bg-black p-3 mb-3">
                    [GET] https://api.escuelajs.co/api/v1/user
                    </h1>
                    </p>
                    <div className="grid content max-w-7xl mx-auto gap-4 md-grid  grid-cols-4 flex"> 
                    
                        {
                            userr.map((us) => (
                                <div key={us.id}>
                                    <Card
                                    imageURL={us.avatar}
                                    desc={us.name}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>     
        </>
    )
}

