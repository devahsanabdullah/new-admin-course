import RegistationFrom from '@/components/Form/RegistationFrom'
import React from 'react'

const Register = () => {
  return (

    <div className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
        <div className="bg-white py-6 px-10 sm:max-w-md  w-[450px] ">
            <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                Registration Form 
            </div>
         <RegistationFrom />
        </div>
    </div>
  )
}

export default Register