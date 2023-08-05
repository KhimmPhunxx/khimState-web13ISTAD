import React, { useEffect, useState } from 'react'
import { UpdateProduct, fetchCategories, fileUploadToServer, insertProduct, updateProduct } from '../services/ProductAction'
import { createBrowserRouter, useLocation, useNavigate  } from 'react-router-dom'

export default function ProductForm({edit}) {

    // 
    const location = useLocation()

    const [product , setProduct] = useState({
        id: 0,
        title: "",
        price: 0,
        description: "",
        categoryId: 1,
        images: ["https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png"]
    })
    const [categories, setCategories] = useState([])
    const [source, setSource] = useState("")

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
        console.log(edit)
        if(edit){
            console.log(location.state)
            const {id, title, price, description, category, images} = location.state
            product.id = id
            product.title = title
            product.description = description
            product.price = price
            product.images = images

            console.log(product.images[0])
        }
        fetchCategories()
        .then(res => setCategories(res))
    }, [])

    const handleOnSubmit = () =>{
        console.log('on submit')
        console.log(product)
        // check condition whether create or update
        if(edit){
             // source !== "" : User Choose new photos
            if(source == ""){
                console.log('id', product.id)
                console.log(product.categoryId)
                updateProduct(product, product.id)
                .then(res => res.json())
                .then(res => console.log(res))
            }else{
                // Choose new Images form local Computer
                const formData = new FormData()
                formData.append("file", source)
                fileUploadToServer(formData)
                .then(resp => {
                    product.images = [resp.data.location]
                    updateProduct(product, product.id)
                    .then(res => res.json())
                    .then(res => console.log(res))
                    
                })
            }
         }else{
            // ----- this will excecute when user insert new data 
            // ----- create images and insert new Product object as form data
            const formData = new FormData()
            formData.append("file", source)
            // ----- function to upload imgage data to server -----
            fileUploadToServer(formData)
            .then(res => {
                product.images = [res.data.location]
                console.log(product.images)
                // insert product by image
                insertProduct(product)
                .then(res => res.json())
                .then(resp => console.log(resp))
            })
            // ---- end function
        }
    }

    const onPreviweImage= (e) =>{
        console.log(e.target.files)
        setSource(e.target.files[0])
    }

  return (
    <main className='max-w-5xl mx-auto mt-5'>    
        <div class="mb-3">
            <label for="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
            <input 
            placeholder='input title' 
            type="text" 
            name="title" 
            value={product.title}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeHandler}
            />
        </div>
        <div className='mb-3'>
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input 
            placeholder='$' 
            type="text" 
            value={product.price}
            name="price" 
            class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeHandler}
            />
        </div>
        <div className='mb-6'>  
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose category</label>
            <select 
            name="categoryId"
            value={product.categoryId} 
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

        <div class="mb-2">
            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descriptions</label>
            <textarea 
            type="text" 
            value={product.description}
            name="description" 
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChangeHandler}
            />
        </div>

        {/* Preview Images */}
        <div className='mb-3 preview'>
            <img className='w-40' 
            src={source == "" ? product.images[0] : URL.createObjectURL(source)} 
            alt="Preview Image" />

        </div>

        {/* choose file area */}
        <div className="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
            <input 
            onChange={onPreviweImage} 
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            name="images" 
            type="file"/>
        </div>

        {/* button Create Product */}
        <button 
            type="button" 
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => handleOnSubmit()}
            >{edit ? "Update Product" : "Create Product"}</button>
    </main>
  )
}
