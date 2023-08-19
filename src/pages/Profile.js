import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import secureLocalStorage from 'react-secure-storage'
import { fetchProfile } from '../redux/actions/ProfileAction'
import { Route, useNavigate } from 'react-router-dom'
import { products } from './../data/product';

export default function Profile() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {profile} = useSelector(state => state.profR)
    const {islogin} = useSelector(state => state.authReducer)

    useEffect(() => {
        const auth = secureLocalStorage.getItem("auth")
        dispatch(fetchProfile(auth ? auth.access_oken : ""))
        
    }, [])
  return (
    <main>
       {
        islogin ? 
           <section className='max-w-4xl bg-blue-200 p-5 rounded-xl mx-auto mt-10 drop-shadow-lg dark:bg-slate-700' >
            <div className=''>
                <div className='dark:bg-slate-800 bg-blue-300 max-w-sm p-1 grid md:grid-cols-2 rounded-full drop-shadow-lg'> 
                     <img src={profile && profile.avatar} className='cursor-pointer h-40 rounded-full border border-4 border-blue-500' alt="" />
                      {/* <i class="fa-solid fa-certificate text-blue-500"></i> */}
                      <h1 className='text-5xl mt-8 text-black dark:text-gray-300 font-bold mt-4'>{profile && profile.name}  
                      <i class="fa-solid fa-certificate text-4xl text-blue-500 ml-2"></i>
              
                      <p className="dark:text-gray-500 font-light text-gray-500 text-lg mx-auto fs-5 text-muted mt-2">
                        <h1 className='font-semibold text-black dark:text-gray-400 float-left mr-3'></h1>{profile && profile.email}
                      </p>
                      </h1> 
                </div>
                <div className=' grid grid-cols-2 mt-5'>
                  <div className='bg-blue-200 dark:bg-slate-700 drop-shadow-lg p-5 rounded-3xl'>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-2">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'>ID: </h1>{profile && profile.id}
                    </p>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'>Email Address: </h1> {profile && profile.email}
                    </p>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'> Password: </h1>{profile && profile.password}
                    </p>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'> Role: </h1> {
                        profile && profile.role
                      }
                    </p>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'> CreationAt: </h1> {
                        profile && profile.creationAt
                      }
                    </p>
                  </div>
                 <div>
                 <p className='text-gray-400 text-lg ml-3'>
                  The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.Flowbite provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.
                  </p>
                 </div>
               </div>
                <div class="border border-b border-gray-600 max-w-7xl mx-auto mt-5"></div>
               <div className='mt-2 text-gray-400 mr-20 block'>
                <i class="fa-solid fa-star text-3xl text-amber-500 mr-2"></i>
                <i class="fa-solid fa-star text-3xl text-amber-500 mr-2"></i>
                <i class="fa-solid fa-star text-3xl text-amber-500 mr-2"></i>
                <i class="fa-solid fa-star text-3xl text-amber-500 mr-2"></i>
                <i class="fa-solid fa-star-half-stroke text-3xl text-amber-500">4.5/5</i>
               </div>
            </div>
            <div className="max-w-sm ">
            <a href="#" class="mt-5 inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Call me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="drop-shadow-lg mt-5 ml-5 inline-flex bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-r  items-center dark:text-white text-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Message Me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </div>
           </section>
        :
        <section className='max-w-4xl p-5 rounded-xl bg-blue-200 mx-auto mt-10 dark:bg-slate-700'>
            <div className=''>
            <div className='dark:bg-slate-800 bg-blue-300 max-w-sm p-1 grid md:grid-cols-2 rounded-full drop-shadow-lg'> 
                <h1 className='text-5xl ml-10 mt-8 text-black dark:text-gray-300 font-bold'>lOGIN  
                      <p className="dark:text-gray-500 font-light text-gray-500 text-lg mx-auto fs-5 text-muted mt-2">
                        <h1 className='font-semibold text-black dark:text-gray-400 float-left mr-3'></h1> exmaple@gmail.com
                      </p>
                      </h1> 
                     <img src="https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg" className='ml-7 cursor-pointer h-40 rounded-full' alt="" />
                      {/* <i class="fa-solid fa-certificate text-blue-500"></i> */}
                      
                </div>
               <div className='mt-5 grid grid-cols-2'>
                  <div className='dark:bg-slate-700 bg-blue-200 p-5 rounded-3xl drop-shadow-lg'>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-2">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'>ID: </h1>null
                    </p>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'>Email Address: </h1> null
                    </p>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'> Password: </h1>null
                    </p>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'> Role: </h1>null
                    </p>
                    <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                      <h1 className='font-semibold text-gray-400 float-left mr-3'> CreationAt: </h1>null
                    </p>
                  </div>
                 <div>
                 <p className='text-gray-400 text-lg ml-3'>
                  The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.Flowbite provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.
                  </p>
                 </div>
               </div>
                <div class="border border-b border-gray-600 max-w-7xl mx-auto mt-2"></div>
               <div className='mt-2 text-gray-400 mr-20'>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"> /5</i>
                
               </div>
               
            </div>
            <div className="max-w-sm ">
            <a
            onClick={() => navigate("/loginform")}
            href="#" class="mt-5 inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Please LogIn
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="drop-shadow-lg mt-5 ml-5 inline-flex bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-r  items-center dark:text-white text-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Message Me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </div>
           </section>
      }
    </main>
  )
}
