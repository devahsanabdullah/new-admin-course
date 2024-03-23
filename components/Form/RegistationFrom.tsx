'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAxios } from '@/components/services/http.service';
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Please enter your name')
    .min(2, 'Name should be at least 2 characters')
    .max(30, 'Name cannot exceed 30 characters'),
  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter a valid email'),
  phone: Yup.number().required('Please enter your phone number'),
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Password should be at least 8 characters'),
  company: Yup.string().required('Please enter your company'),
  title: Yup.string().required('Please enter your title'),
  services: Yup.string().required('Please enter your services'),
});

const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    company: '',
    title: '',
    services: '',
  };
const RegistationFrom = () => {
    const { post } = useAxios()
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, {resetForm}) => {
        post('/register', values)
        .then((response) => {
          const result = response.data
          console.log(result,"success")
          resetForm()
        })
        .catch((error) => {
            const errorMessage = error.response.data.message
           console.log(errorMessage,"error")
           resetForm()
        })
    }}
  >
    {({ }) => (
      <Form >
         <div className="">
             <div>
                  <Field type="text" name='name' className="focus:outline-none border-b w-full border-sky-400 pb-2 bg-white text-black "  placeholder="Name "/>
                  <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />

             </div>
              <div>
                  <Field type="email" name='email' className="focus:outline-none border-b bg-white text-black w-full pb-2 border-sky-400 placeholder-gray-500 my-8"  placeholder="Eamil Adress "/>
                  <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
             </div>
              <div>
             <Field type="text" name='company'  className="focus:outline-none border-b bg-white text-black w-full pb-2 bg-white text-black border-sky-400 placeholder-gray-500 mb-8"  placeholder="Company "/>
             <ErrorMessage
                name="company"
                component="div"
                className="text-red-500"
              />
             </div>
              <div>
             <Field type="phone" name='phone' className="focus:outline-none bg-white text-black border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Phone "/>
             <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />
             </div>
             <div className="">
                 <Field type="password" name='password' className="focus:outline-none  bg-white text-black border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Password " />
                 <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
             </div>
             <div>
             <Field type="text" name='title'  className="focus:outline-none border-b bg-white text-black w-full pb-2 bg-white text-black border-sky-400 placeholder-gray-500 mb-8"  placeholder="title "/>
             <ErrorMessage
                name="title"
                component="div"
                className="text-red-500"
              />
             </div>
             <div>
             <Field type="text" name='services'  className="focus:outline-none border-b bg-white text-black w-full pb-2 bg-white text-black border-sky-400 placeholder-gray-500 mb-8"  placeholder="services "/>
             <ErrorMessage
                name="services"
                component="div"
                className="text-red-500"
              />
             </div>
             <div className="flex justify-center my-6">
                 <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                     Create Account
                 </button>
             </div>
             <div className="flex justify-center ">
                 <p className="text-gray-500">Already have an acount? </p>
                 <a href="/login" className="text-sky-600 pl-2"> Sign In</a>
             </div>
         </div>
         </Form>
             )}
         </Formik>
  )
}

export default RegistationFrom