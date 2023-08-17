import React, { useEffect, useState } from 'react'
import { products } from './../data/product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCatories, fetchAllProducts } from '../redux/actions/ProductActions';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import Loading from '../components/Loading';
import dev from "./../lottiefile/teamwork.json"
import { useLottie } from 'lottie-react';



export default function About() {

  const options = {
    animationData: dev,
    loop: true
  };

  const { View } = useLottie(options);
    // const [isLoading, setLoading] = useState(true)
    // const dispatch = useDispatch()
    // const {products} = useSelector(state => state.prodReducer)
    // const {categories} = useSelector(state => state.prodReducer)
    // const {isLoading} = useSelector(state => state.prodReducer)
       
    // useEffect(() => {
    //   dispatch(fetchAllCatories())
    // }, [])
  return (
   
   <main className='max-w-7xl mx-auto'>
      <section class="bg-white dark:bg-slate-800">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-8">
                <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                <img class="mt-4 w-full lg:mt-5 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                <img class="mt-4 w-full lg:mt-10 mt-0 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
            </div>
        </div>
    </section>

    <section className='grid grid-cols-2 md:grid-cols-4 flex max-w-6xl mx-auto gap-5'>
      <div className='dark:bg-pink-300 w-60 h-20 rounded-lg grid grid-cols-2'>
        <h1 className='ml-10 text-gray-800 m-8 font-bold text-3xl mt-5'>98KB</h1>
        <i class="fa-solid fa-desktop mt-3 text-6xl text-gray-700"></i>
      </div>
      <div className='dark:bg-blue-300 w-60 h-20 rounded-lg  grid grid-cols-2 flex'>
        <h1 className='ml-10 text-gray-800 m-8 font-bold text-3xl mt-5'>12K</h1>
        <i class="fa-solid fa-bicycle mt-3 text-6xl text-gray-700"></i>
      </div>
      <div className='dark:bg-yellow-200 w-60 h-20 rounded-lg grid grid-cols-2 flex'>
        <h1 className='ml-10 text-gray-800 m-8 font-bold text-3xl mt-5'>122K</h1>
        <i class="fa-solid fa-person-walking-luggage mt-3 text-6xl text-gray-700"></i>
      </div>
      <div className='dark:bg-green-300 w-60 h-20 rounded-lg grid grid-cols-2 flex'>
        <h1 className='ml-10 text-gray-800 m-8  font-bold text-3xl mt-5'>11MB</h1>
        <i class="fa-solid fa-folder-open mt-3 ml-3 text-6xl text-gray-700"></i>
      </div>
    </section>
      <section class="bg-white mt-8 dark:bg-slate-800">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          {
            View
          }
          <div class="mt-4 md:mt-0">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
              <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
              <a href="#" class="inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                  Get started
                  <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>
  </section>
      
   </main>

  )
}
