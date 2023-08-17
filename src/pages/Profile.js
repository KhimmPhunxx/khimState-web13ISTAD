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
           <section className='max-w-6xl mx-auto mt-10'>
            <div className='text-center item-center'>
                <img src={profile && profile.avatar} className='h-40 rounded-full mx-auto' alt="" />
                <h1 className='text-xl text-white font-bold'>Username: {profile && profile.name} </h1>
                <p className="dark:text-white text-black text-lg mx-auto fs-5 text-muted mt-3">
                    Online learning and teaching marketplace <br/> with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
                </p>
            </div>
            <div className="max-w-sm mx-auto mt-5 ">
            <a href="#" class="mt-5 ml-10 inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Call me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="mt-5 ml-5 inline-flex items-center dark:text-white text-black border border-gray-300 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Message Me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </div>
           </section>
        :
        <section className='max-w-6xl mx-auto mt-10'>
        <div className='text-center item-center'>
            <img src="https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg" className='h-40 rounded-full mx-auto' alt="" />
            <h1 className='text-xl text-blck dark:text-white font-bold'>........</h1>
            <p className="text-blue-500 text-lg mx-auto fs-5 text-muted mt-3">
               Pleas Login to Your account.
            </p>

        </div>
        <div className="max-w-md mx-auto mt-5">
        <a href="#"
        onClick={() => navigate("/loginform")} 
        class="mt-5 ml-10 inline-flex items-center text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Please Login
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="mt-5 ml-10 inline-flex items-center text-black dark:text-white border border-gray-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:focus:ring-primary-900">
                Message Me
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
       </section>
       }

    </main>
  )
}
