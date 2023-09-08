import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts, searchProduct } from '../services/ProductAction';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    // distructuring declare
   const [filterProducts, setFilterProducts] = useState([])
   const [search , setSearch] = useState("")
   const navigate = useNavigate()

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
            selector: row => <button 
            onClick={() => navigate("/edit", {
                state: row
            })}
            type="button" 
            className="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >Edit</button>

        },
    ];
    useEffect(() => {
        searchProduct(search).then(resp => setFilterProducts(resp))
    }, [search])
   
    useEffect(() => {
        fetchProducts()
        .then(resp => setFilterProducts(resp))
    }, [])
  return (
   <main className="max-w-7xl mx-auto mt-5 ">
         <DataTable
        columns={columns}
        data={filterProducts}
        pagination
        subHeader
        subHeaderComponent={
            <form>   
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                    type="search" id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search here"
                    value={search}
                    required
                    onChange={(e) => {
                        setSearch(e.target.value)
                        console.log(search)
                        // handleOnChange()
                    }}
                    />
                </div>
            </form>

        }
    />
   </main>
  )
}
