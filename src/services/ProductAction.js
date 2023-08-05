import axios from "axios"
import { base_URL } from "../utils/Constent"
import { products } from './../data/product';

// add categories from browser and 
export const fetchCategories = async () => {
    let resp = await fetch(`${base_URL}categories/`, {
        method: "GET"
    })
    return resp.json()
}

export const fetchProducts = async () => {
   let resp = await fetch(`${base_URL}products`)
   return resp.json()
}

// MARK: Create a function to insert product
export const insertProduct = async (product) => {
    let resp = await fetch(`${base_URL}products/`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp
}

// MARK: Function to insert file such us imgae or PDF, etc.
export const fileUploadToServer = async (image) => {
    let resp = await axios({
        method: "POST",
        header: {
            "Content-Type" : "multipart/form-data"
        },
        url: `${base_URL}files/upload`,
        data: image
    })
    return resp
}

// Update Product by Product ID
export const updateProduct = async (product, id) => {
    let resp = await fetch(`${base_URL}products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp
}

// function for search data add from api
export const searchProduct = async (title) => {
    let resp = await fetch(`${base_URL}products?title=${title}`)
    return resp.json()
}