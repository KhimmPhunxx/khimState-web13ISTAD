import React, { useEffect, useState } from 'react'
import { fetchCategories, insertProduct } from '../services/ProductAction'

export default function ProductForm() {

    const [product , setProduct] = useState({
        title: "",
        price: 0,
        description: "",
        categoryId: 1,
        images: ["https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png"]
    })
    const [categories, setCategories] = useState([])

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setProduct(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
        console.log(product)
    }

    // add categories from Folder services/ProductAction.js
    useEffect(() => {
        fetchCategories()
        .then(res => setCategories(res))
    }, [])

    const handleOnSubmit = () =>{
        console.log(' on submit')
        console.log(product)
        insertProduct(product)
        .then(res => {
            if(res.status == 201){
                alert("Your Created is Succesfull!!")
            }
            res.json()
        })
    }

  return (
    <main className='max-w-5xl mx-auto'>    
        <div class="mb-3">
            <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
            <input 
            placeholder='input title' 
            type="text" 
            name="title" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeHandler}
            />
        </div>
        <div className='mb-3'>
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input 
            placeholder='$' 
            type="text" 
            name="price" 
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeHandler}
            />
        </div>
        <div className='cb-3'>  
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose category</label>
            <select 
            name="categoryId" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeHandler}
            >
            <option selected>Please choose category</option>
            {
                // return to UI use () for arrow function
               categories && categories.map(cat => (
                    <option value={cat.id}>{cat.name} </option>
               ))
            }
            </select>

        </div>

        <div class="mb-6">
            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descriptions</label>
            <textarea 
            type="text" 
            name="description" 
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeHandler}
            />
        </div>
        <button 
            type="button" 
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() =>  handleOnSubmit()}
            >Create Product</button>
    </main>
  )
}
