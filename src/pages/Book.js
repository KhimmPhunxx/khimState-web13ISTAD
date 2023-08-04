import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/ProductActions'

export default function Book() {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.prodReducer)
    useEffect(() => {
        // Subscribe to Store
        dispatch(fetchAllProducts())

    }, [])

    return (
       <main>
        {
            console.log(products && products)
        }
       </main>
    )
}
