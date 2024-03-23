import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import Image from 'next/image'
import { useAxios } from '@/components/services/http.service'
import { useMutation, useQueryClient } from 'react-query'
import * as Yup from 'yup';
// import { useAwsUploader } from '@/hook/useAwsUploader'
import LoaderIcon from '@/components/Icon/LoaderIcon';
// import { useRouter } from 'next/router'
const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    file: Yup.mixed().required('File is required'), // Assuming it's a required file
    description: Yup.string().required('Description is required'),

  });



export default function CreateVideoModal({id}:any) {
  const [isOpen, setIsModal] = useState(false)
  const videoInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState('')
  const queryClient = useQueryClient()
  const { setBearerToken, post } = useAxios()
  const extractPosterFromVideo = async (
    videoElement: HTMLVideoElement
  ): Promise<Blob> => {
    return new Promise(async (resolve, reject) => {
      const canvas = document.createElement('canvas')
      canvas.width = videoElement.videoWidth
      canvas.height = videoElement.videoHeight
      const ctx = canvas.getContext('2d')

      if (ctx === null) {
        reject('2d context is not supported')
        return
      }

      videoElement.currentTime = 5
      await new Promise((seekResolve) =>
        videoElement.addEventListener('seeked', seekResolve)
      )
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob)
          else reject('Unable to create blob')
        },
        'image/jpeg',
        0.8
      )
    })
  }
  const fetch = async (newData: any) => {
    // setBearerToken(authReducer?.token)
    const response = await post(`/video/${id}`, newData)
    return response.data
  }
  const mutation = useMutation(fetch, {
    onSuccess: () => {
      queryClient.invalidateQueries('videos')
      setIsModal(false)
     
    }
  })

  


  return (
    <div>
      <button
        onClick={() => setIsModal(true)}
        className='bg-primary text-white font-bold  px-3 py-2 rounded-full'
      >
       Create Video
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
                  <h1 className="font-headingBold !text-black text-3xl">Add New Course</h1>
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
                    title: '',
                    file: null,
                    description:"",
                   
                  
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values) => {
                    let formData = new FormData();   
                    const input = videoInputRef.current
                    if (input && values.file && input.files && input.files.length > 0) {
                      const videoFile: any = input.files[0]
                      const videoUrl = URL.createObjectURL(videoFile)
                      const videoElement = document.createElement('video')
                      videoElement.src = videoUrl
                      videoElement.load()

                      videoElement.addEventListener('loadeddata', async () => {
                        const posterImageBlob = await extractPosterFromVideo(
                          videoElement
                        )
                        if(values.file)
                        {
                          formData.append('file', values.file); 
                        }
                     
                        // formData.append('image', posterImageBlob); 
                        formData.append('title', values.title);
                        formData.append('description', values.description);
                        mutation.mutate(formData)
                        // formData.set('poster', posterImageBlob)
                 
                      })
                    } 


 

                  }}
                >
                  {({ setFieldValue, setFieldTouched }) => (
                    <Form>
                      <div className="w-full px-16 !text-black flex flex-col justify-center items-center mt-5">
                        <div className="w-full md:w-1/2 mt-5">
                          <p className="font-headingBold text-lg pb-2 !text-[#575656]">
                            Video Title
                          </p>
                          <Field
                            type="text"
                            name="title"
                            placeholder=" Course Title"
                            className="w-full text-xl placeholder:text-xl placeholder:font-headingBook bg-[#edf1f6]  rounded-md h-12 px-2  focus:outline-primary outline-none"
                          />
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="error text-red-500 text-sm font-headingBook pt-2"
                          />
                        </div>
                     
                     
                        <div className="w-full lg:w-1/2 mt-5">
                          <p className="font-headingBold text-lg pb-2 text-[#575656]">
                            Video description
                          </p>
                          <Field
                            type="text"
                            name="description"
                            placeholder="Course description"
                            className="w-full text-xl placeholder:text-xl placeholder:font-headingBook bg-[#edf1f6] rounded-md h-12 px-2 focus:outline-primary outline-none"
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="error text-red-500 text-sm font-headingBook pt-2"
                          />
                        </div>
                        <div className="w-full lg:w-1/2 mt-5">
                          <p className="font-headingBold text-lg pb-2 text-[#575656]">
                            Course Video
                          </p>
                          <label htmlFor="file">
                            <div className="flex items-center cursor-pointer ">
                              <input
                                type="file"
                                id="file"
                                name="file"
                                ref={videoInputRef}
                                // accept="video/mp4,video/x-m4v,video/*"
                                onChange={(e: any) => {
                                  setFieldValue('file', e.target.files[0])
                                  setFileName(e.target?.files[0]?.name)
                                  setFieldTouched('file', false)
                                }}
                                className="hidden"
                              />
                              <Image
                                src="/images/plus.png"
                                alt=""
                                width={40}
                                height={40}
                              />
                              <p className="ml-2 text-sm font-normal">
                                {fileName ? fileName : 'Add Image'}
                              </p>
                            </div>
                          </label>
                          <ErrorMessage
                            name="file"
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
