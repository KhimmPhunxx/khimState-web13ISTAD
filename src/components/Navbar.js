import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

// use rfc
export default function Navbar() {
    const navigate = useNavigate()
  return (

        <header className="sticky top-0 z-10">      
            <nav class="bg-blue-200 border-gray-200 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" class="flex items-center">
                <img src="https://khimmphunxx.github.io/vakhim-mini-project-web13/img/logo001.webp" class="h-9 mr-3" alt="" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CaMTraveL</span>
            </Link>
            <div class="flex md:order-2">
            <button
            onClick={() => navigate("/create")}
            type="button" 
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Insert
            </button>
            <button 
            onClick={()=> navigate("loginform")}
            type="button" 
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >Sign-Up</button>
            </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    </div>
                    <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-blue-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "dark:text-white"} aria-current="page">Home</NavLink>
                    </li>
                    <li>
                    <NavLink 
                    to="./about-us" 
                    className={({isActive}) => isActive ? "md:text-blue-500 block py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" : "dark:text-white"}
                    >Shop</NavLink>
                    </li>
                    <li>
                    <NavLink to="/booking"
                     className={({isActive}) => isActive ? "md:text-blue-500 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700":"dark:text-white"}
                     >Book</NavLink>
                    </li>
                    <li>
                    <NavLink to="/datatable" 
                    className={({isActive}) => isActive ? " block py-2 pl-3 pr-4 text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" : "dark:text-white"}>DataTable</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        </header>
    
  )
}
