'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAxios } from '@/components/services/http.service';
// Remove useDispatch if not used
// import { useRouter } from 'next/router'; // Fixed import
import LoaderIcon from '@/components/Icon/LoaderIcon';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
const validationSchema = Yup.object({
  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter a valid email'),
});

const initialValues = {
  email: '',
};

const Forgetpassword = () => {
  const [isLoading, setIsloading] = useState(false);
  const { post } = useAxios();
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setIsloading(true);
        post('/admin/forgot-password', values)
          .then((response) => {
            toast.success('Success! Email sent.');
            router.push('/login');
            setIsloading(false);
            // Consider navigating the user or resetting the form here if needed
          })
          .catch((error) => {
            const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
            toast.error(errorMessage);
            setIsloading(false);
          });
      }}
    >
      {() => (
        <Form>
          <div className="">
            <div className='my-8'>
              <Field type="email" name='email' className="focus:outline-none border-b bg-white text-black w-full pb-2 border-sky-400 placeholder-gray-500" placeholder="Email" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div className="flex justify-center mb-6">
              {isLoading ? (
                <button disabled className="!bg-primary mt-7 rounded-lg text-primary font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2">
                  <LoaderIcon />
                </button>
              ) : (
                <button type="submit" className="!bg-primary mt-7 !text-white rounded-lg text-primary font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2">
                  Send Email
                </button>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Forgetpassword;
