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
                <p className="text-white text-lg mx-auto fs-5 text-muted mt-3">
                    Online learning and teaching marketplace <br/> with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
                </p>
            </div>
            <div className="max-w-md mx-auto mt-5">
            <button type="button" class="text-white ml-20 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Call Mee</button>
            <button type="button" class="text-white ml-20 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Message Me</button>
            </div>
           </section>
        :
        <section className='max-w-6xl mx-auto mt-10'>
        <div className='text-center item-center'>
            <img src="https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg" className='h-40 rounded-full mx-auto' alt="" />
            <h1 className='text-xl text-white font-bold'>........</h1>
            <p className="text-white text-lg mx-auto fs-5 text-muted mt-3">
               Pleas Login to Your account
            </p>
        </div>
        <div className="max-w-sm mx-auto mt-5">
        <button 
        onClick={() => navigate("/loginform")}
        type="button" 
        class="text-white ml-20 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pleas Login</button>
        </div>
       </section>
       }

    </main>
  )
}
