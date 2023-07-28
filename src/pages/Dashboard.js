import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../services/ProductAction';


export default function Dashboard() {
    // distructuring declare
   const [products, setProducts] = useState([])
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Photos',
            selector: row => <img  className='w-14' src={row.images[0]} alt="products" />
        },
        {
            name: 'Action',
            selector: row => <button type="button" class="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>

        },
    ];
    
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    useEffect(() => {
        fetchProducts()
        .then(resp => setProducts(resp))
    }, [])
  return (
   <main className='max-w-7xl mx-auto '>
         <DataTable
        columns={columns}
        data={products}
        pagination
    />
   </main>
  )
}
