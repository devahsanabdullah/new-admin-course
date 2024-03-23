'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAxios } from '@/components/services/http.service';
// import { useRouter } from 'next/router'; // Corrected import
import LoaderIcon from '@/components/Icon/LoaderIcon';
import { toast } from 'react-toastify'; // Make sure to import toast
import { useRouter } from "next/navigation";
const validationSchema = Yup.object({
  newPassword: Yup.string()
    .required('Please enter your new password')
    .min(8, 'Password should be at least 8 characters'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null as any], 'Passwords must match')
    .required('Please confirm your password'),
});

const initialValues = {
  newPassword: '',
  confirmpassword: '',
};

const ChangePassword = ({ resetToken }:any) => {
  const [isLoading, setIsLoading] = useState(false);
  const { post } = useAxios();
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setIsLoading(true);
        post(`/admin/reset-password/${resetToken}`, values)
          .then((response) => {
            toast.success('Success! Password changed.');
            router.push('/login');
            setIsLoading(false);
          })
          .catch((error) => {
            const errorMessage = error.response?.data?.message || 'An error occurred';
            toast.error(errorMessage);
            setIsLoading(false);
          });
      }}
    >
      {() => (
        <Form>
          <div>
            <div className='my-8'>
              <Field type="password" name='newPassword' className="focus:outline-none border-b bg-white text-black w-full pb-2 border-sky-400 placeholder-gray-500" placeholder="New Password"/>
              <ErrorMessage name="newPassword" component="div" className="text-red-500" />
            </div>
            <div className="mb-3">
              <Field type="password" name='confirmpassword' className="focus:outline-none bg-white text-black border-b w-full pb-2 border-sky-400 placeholder-gray-500" placeholder="Confirm Password" />
              <ErrorMessage name="confirmpassword" component="div" className="text-red-500" />
            </div>
            <div className="flex justify-center mb-6">
              {isLoading ? (
                <button disabled className="!bg-primary mt-7 rounded-lg text-primary font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2">
                  <LoaderIcon />
                </button>
              ) : (
                <button type="submit" className="!bg-primary mt-7 !text-white rounded-lg text-primary font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2">
                  Submit
                </button>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ChangePassword;
