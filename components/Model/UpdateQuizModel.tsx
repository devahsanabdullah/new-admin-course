import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import Image from 'next/image'
import { useAxios } from '@/components/services/http.service'
import { useMutation, useQueryClient } from 'react-query'
import * as Yup from 'yup';
// import { useAwsUploader } from '@/hook/useAwsUploader'
import LoaderIcon from '@/components/Icon/LoaderIcon'
// import { useRouter } from 'next/router'
const quizSchema = Yup.object().shape({
    question: Yup.string().required('Question is required'),
    optionA: Yup.string().required('Option A is required'),
    optionB: Yup.string().required('Option B is required'),
    optionC: Yup.string().required('Option C is required'),
    optionD: Yup.string().required('Option D is required'),
    isCorrect: Yup.string().required('Correct option is required'),
  });


export default function UpdateQuizModel({id,item}:any) {
  const [isOpen, setIsModal] = useState(false)
  const videoInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState('')
  const queryClient = useQueryClient()
  const { setBearerToken, patch } = useAxios()
  const addPlayer = async (newData: any) => {
    // setBearerToken(authReducer?.token)
    const response = await patch(`/course/${id}/quiz/${item._id}`, newData)
    return response.data
  }
  const mutation = useMutation(addPlayer, {
    onSuccess: () => {
     
      setIsModal(false)
      queryClient.invalidateQueries('quiz')
    }
  })

  


  return (
    <div>
      <button
        onClick={() => setIsModal(true)}
        className='bg-blue-700 px-2 !text-white  rounded'
      >
     Edit
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={() => setIsModal(true)}
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block w-full max-w-2xl px-6 py-7 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl sm:my-5 sm:align-middle sm:max-w-7xl">
                <div className="flex w-full  justify-between items-center">
                  <div></div>
                  <h1 className="font-headingBold !text-black text-3xl">Update quiz</h1>
                  <Image
                    src="/images/cross-gray.png"
                    alt=""
                    width={34}
                    height={34}
                    onClick={() => setIsModal(false)}
                    className=" top-5 right-5 cursor-pointer"
                  />
                </div>

                <Formik
                  enableReinitialize
                  initialValues={{
                    question: item?.question,
                    optionA: item?.options[0],
                    optionB: item?.options[1],
                    optionC: item?.options[2],
                    optionD: item?.options[3],
                    isCorrect:item?.isCorrect
                  
                  }}
                  validationSchema={quizSchema}
                  onSubmit={async (values) => {
                      const data={
                        question:values.question,
                        options:[values.optionA,values.optionB,values.optionC,values.optionD],
                        isCorrect:values.isCorrect

                      }
    mutation.mutate(data)


                  }}
                >
                  {({ setFieldValue, setFieldTouched }) => (
                    <Form>
                      <div className="w-full px-16 !text-black flex flex-col justify-center items-center mt-5">
                        <div className="w-full md:w-1/2 mt-5">
                          <p className="font-headingBold text-lg pb-2 !text-[#575656]">
                            Question
                          </p>
                          <Field
                            type="text"
                            name="question"
                            placeholder=" Question"
                            className="w-full text-xl placeholder:text-xl placeholder:font-headingBook bg-[#edf1f6]  rounded-md h-12 px-2  focus:outline-primary outline-none"
                          />
                          <ErrorMessage
                            name="question"
                            component="div"
                            className="error text-red-500 text-sm font-headingBook pt-2"
                          />
                        </div>
                        <div className="w-full lg:w-1/2 mt-5">
                          <p className="font-headingBold text-lg pb-2 text-[#575656]">
                           Options
                          </p>
                          <Field
                            type="text"
                            name="optionA"
                            placeholder="Option A"
                            className="w-full text-xl placeholder:text-xl placeholder:font-headingBook bg-[#edf1f6] rounded-md h-12 px-2 focus:outline-primary outline-none"
                          />
                          <ErrorMessage
                            name="optionA"
                            component="div"
                            className="error text-red-500 text-sm font-headingBook pt-2"
                          />
                        </div>
                        <div className="w-full lg:w-1/2 mt-5">
                        
                          <Field
                            type="text"
                            name="optionB"
                            placeholder="Option B"
                            className="w-full text-xl placeholder:text-xl placeholder:font-headingBook bg-[#edf1f6] rounded-md h-12 px-2 focus:outline-primary outline-none"
                          />
                          <ErrorMessage
                            name="optionB"
                            component="div"
                            className="error text-red-500 text-sm font-headingBook pt-2"
                          />
                        </div>
                        <div className="w-full lg:w-1/2 mt-5">
                         
                          <Field
                            type="text"
                            name="optionC"
                            placeholder="Option C"
                            className="w-full text-xl placeholder:text-xl placeholder:font-headingBook bg-[#edf1f6] rounded-md h-12 px-2 focus:outline-primary outline-none"
                          />
                          <ErrorMessage
                            name="optionC"
                            component="div"
                            className="error text-red-500 text-sm font-headingBook pt-2"
                          />
                        </div>
                        <div className="w-full lg:w-1/2 mt-5">
                         
                         <Field
                           type="text"
                           name="optionD"
                           placeholder="Option D"
                           className="w-full text-xl placeholder:text-xl placeholder:font-headingBook bg-[#edf1f6] rounded-md h-12 px-2 focus:outline-primary outline-none"
                         />
                         <ErrorMessage
                           name="optionD"
                           component="div"
                           className="error text-red-500 text-sm font-headingBook pt-2"
                         />
                       </div>
                        <div className="w-full lg:w-1/2 mt-5">
                          <p className="font-headingBold text-lg pb-2 text-[#575656]">
                            Correct Answer
                          </p>
                          <Field
                            type="text"
                            name="isCorrect"
                            placeholder="Correct Option"
                            className="w-full text-xl placeholder:text-xl placeholder:font-headingBook bg-[#edf1f6] rounded-md h-12 px-2 focus:outline-primary outline-none"
                          />
                          <ErrorMessage
                            name="isCorrect"
                            component="div"
                            className="error text-red-500 text-sm font-headingBook pt-2"
                          />
                        </div>

                        {mutation.isLoading  ? (
                          <button
                            disabled
                            className="!bg-primary mt-7 rounded-lg text-priamry font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2"
                          >
                            <LoaderIcon />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="!bg-primary mt-7 !text-white rounded-lg text-priamry font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
