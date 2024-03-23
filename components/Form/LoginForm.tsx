'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAxios } from '@/components/services/http.service';
import { useDispatch } from '@/components/store/index';
import { setUserDetails } from '@/components/store/reducers/auth/authReducer';
import { useRouter } from "next/navigation"; // Corrected import
import LoaderIcon from '@/components/Icon/LoaderIcon';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
  email: Yup.string().required('Please enter your email').email('Please enter a valid email'),
  password: Yup.string().required('Please enter your password').min(8, 'Password should be at least 8 characters'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { post } = useAxios();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setErrors, resetForm }) => {
        setIsLoading(true);
        post('/login', values)
          .then((response) => {
            const result = response.data;
            if(result?.user?.role=='admin'){
              dispatch(setUserDetails({ token: result?.token, userData: result?.user }));
              toast.success('Login Success');
              router.push('/loading');
            }else
            {
              toast.error('only admin access');
              setIsLoading(false);

            }
           
          })
          .catch((error) => {
            const errorMessage = error.response?.data?.msg || 'An error occurred';
            toast.error(errorMessage);
            // Set the form error for email or password based on the response
            if (errorMessage.includes('Invalid Email or Password')) {
              setErrors({ email: ' ', password: 'Invalid Email or Password' });
            }
            setIsLoading(false);
          });
      }}
    >
      {() => (
        <Form>
          <div className="">
            <div className='my-8'>
              <Field type="email" name="email" className="focus:outline-none border-b bg-white text-black w-full pb-2 border-sky-400 placeholder-gray-500" placeholder="Email Address"/>
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-3">
              <Field type="password" name="password" className="focus:outline-none bg-white text-black border-b w-full pb-2 border-sky-400 placeholder-gray-500" placeholder="Password"/>
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <p onClick={() => router.push('/forget-password')} className='flex justify-end text-blue-500 hover:underline text-md cursor-pointer'>Forgot Password?</p>
            <div className="flex justify-center mb-6">
              {isLoading ? (
                <button disabled className="!bg-primary mt-7 rounded-lg text-primary font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2">
                  <LoaderIcon />
                </button>
              ) : (
                <button type="submit" className="!bg-primary mt-7 !text-white rounded-lg text-primary font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2">
                  Login
                </button>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
