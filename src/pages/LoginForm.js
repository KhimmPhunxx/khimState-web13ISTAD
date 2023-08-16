import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/actions/authAction'
import secureLocalStorage from 'react-secure-storage'


export default function LoginForm(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {islogin} = useSelector(state => state.authReducer)
    const {auth} = useSelector(state => state.authReducer)
    
    const [user, setUser] = useState({
        email: "john@mail.com",
        password: "changeme"
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        console.log(user)
        setUser(prevState =>
            {
                return{
                    ...prevState,
                    [name]: value
                }
            })
    }

    useEffect(() => {
        console.log(islogin)
        console.log('in Storage', secureLocalStorage.getItem('auth'))
        console.log('auth:', auth)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("onSubmit")
        console.log(user)
        dispatch(loginUser(user))
        .then(resp => [
            navigate("/")
        ])   
    }

  return (
    <main className='flex grid md:grid-cols-2 max-w-6xl mx-auto dark:bg-slate-900'>
        <section className='w-4/5 mx-auto'>
        <lottie-player src="https://lottie.host/183bd6e3-440e-46bd-9140-2b93f2e66354/imqbdtmDDU.json" background="#" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
        </section>
       <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">   
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                value={user.email}
                                type="email" 
                                onChange={handleInputChange}
                                name="email" 
                                id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                value={user.password}
                                type="password" 
                                onChange={handleInputChange}
                                name="password" 
                                id="password" 
                                placeholder="••••••••" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-blue-700 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button 
                            type="submit" 
                            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Sign in
                                </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don'  t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
