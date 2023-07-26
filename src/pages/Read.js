import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './../data/product';

export default function Read() {
  let {id} = useParams()

  // MARK: create a state to store product object
  // set Defaul value for state for handle slow data load
  const [product , setProduct] = useState({
    title: "Defaul titile",
    description: "លក់ខោអាវជជុះ",
    images : [
      "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png"
    ]
  })

  // fetch API from User BackEnd
  let fetchProductDetail = (id) => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(resp => resp.json())
    .then(resp => setProduct(resp))
  } 
  useEffect(() => {
    fetchProductDetail(id)
  }, [])
  // use ,[] for hold data

  return (
    <main className='mx-auto max-w-7xl'>
      <h2 className='text-3xl '>{product.title} </h2>
      <h2 className='text-xl '>{product.description} </h2>
      <img src={product.images[0]} alt="" />
    </main>
  )
}
