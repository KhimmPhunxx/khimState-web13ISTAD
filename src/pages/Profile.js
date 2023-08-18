import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import secureLocalStorage from 'react-secure-storage'
import { fetchProfile } from '../redux/actions/ProfileAction'
import { useNavigate } from 'react-router-dom'

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
           <section className='max-w-xl bg-blue-200 p-5 rounded-xl mx-auto mt-10 dark:bg-slate-700' >
            <div className=''>
                <img src={profile && profile.avatar} className='h-40 rounded-full' alt="" />
                <div>
                    {/* <i class="fa-solid fa-certificate text-blue-500"></i> */}
                    <h1 className='text-3xl text-black dark:text-gray-300 font-bold ml-8'>{profile && profile.name}  
                    <i class="fa-solid fa-certificate text-blue-500 ml-2"></i>
                    </h1> 
                    
                </div>
                <p className="dark:text-gray-500 text-gray-500 dark:text-gray-400 text-lg mx-auto fs-5 text-muted mt-2">
                  <h1 className='font-semibold text-black dark:text-gray-400 float-left mr-3'>ID: </h1>{profile && profile.id}
                </p>
                <p className="dark:text-gray-500 text-gray-500 text-lg mx-auto fs-5 text-muted mt-1">
                  <h1 className='font-semibold text-black dark:text-gray-400 float-left mr-3'>Email Addregulars: </h1>{profile && profile.email}
                </p>
                <p className="dark:text-gray-500 text-gray-500 text-lg mx-auto fs-5 text-muted mt-1">
                  <h1 className='font-semibold text-black dark:text-gray-400 float-left mr-3'> Password: </h1>{profile && profile.password}
                </p>
                <p className="dark:text-gray-500 text-gray-500 text-lg mx-auto fs-5 text-muted mt-1">
                  <h1 className='font-semibold text-black dark:text-gray-400 float-left mr-3'> Role: </h1>{profile && profile.role}
                </p>
                <div class="border border-b border-gray-600 max-w-7xl mx-auto mt-2"></div>
               <div className='mt-2 text-gray-400 mr-20'>
                <i class="fa-solid fa-star text-3xl text-yellow-600 mr-2"></i>
                <i class="fa-solid fa-star text-3xl text-yellow-600 mr-2"></i>
                <i class="fa-solid fa-star text-3xl text-yellow-600 mr-2"></i>
                <i class="fa-solid fa-star text-3xl text-yellow-600 mr-2"></i>
                <i class="fa-solid fa-star-half-stroke text-3xl text-yellow-600"></i>
               </div>
               
            </div>
            <div className="max-w-sm ">
            <a href="#" class="mt-5 inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Call me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="mt-5 ml-5 inline-flex items-center dark:text-white text-black border border-gray-500 dark:border-gray-300 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Message Me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </div>
           </section>
        :
        <section className='max-w-xl p-5 rounded-xl bg-blue-200 mx-auto mt-10 dark:bg-slate-700'>
            <div className=''>
                <img src="https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg" className='h-40 rounded-full' alt="" />
                <h1 className='text-2xl texy-black dark:text-gray-300 font-bold'>Profile don't Login!!</h1> 
                <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-2">
                  <h1 className='font-semibold text-gray-400 float-left mr-3'>ID: </h1>null
                </p>
                <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                  <h1 className='font-semibold text-gray-400 float-left mr-3'>Email Addregulars: </h1> null
                </p>
                <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                  <h1 className='font-semibold text-gray-400 float-left mr-3'> Password: </h1>null
                </p>
                <p className="dark:text-gray-500 text-gray-400 text-lg mx-auto fs-5 text-muted mt-1">
                  <h1 className='font-semibold text-gray-400 float-left mr-3'> Role: </h1>null
                </p>
                <div class="border border-b border-gray-600 max-w-7xl mx-auto mt-2"></div>
               <div className='mt-2 text-gray-400 mr-20'>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                <i class="fa-regular fa-star text-3xl text-gray-500 mr-2"></i>
                
               </div>
               
            </div>
            <div className="max-w-sm ">
            <a
            onClick={() => navigate("/loginform")}
            href="#" class="mt-5 inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Please LogIn
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="mt-5 ml-5 inline-flex items-center dark:text-white text-black border border-gray-500 dark:border-gray-300 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Message Me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </div>
           </section>
      }
    </main>
  )
}
