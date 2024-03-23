import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useAxios } from '@/components/services/http.service'
import { useQueryClient } from 'react-query'
import DeleteLoaderIcon from '@/components/Icon/DeleteLoaderIcon'
export default function DeleteQuizModel({ id ,videoId}: any) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isLoader, setIsLoader] = useState(false)
  const cancelButtonRef = useRef(null)
  const queryClient = useQueryClient()
  const { setBearerToken, deleteRequest } = useAxios()
  const handleDelete = () => {
    setIsLoader(true)
    // setBearerToken(authReducer?.token)

    deleteRequest(`/course/${id}/quiz/${videoId}`)
      .then(() => {
       
        queryClient.invalidateQueries('quiz')

        setIsLoader(false)
        setIsDeleteOpen(false)
      })
      .catch(() => {
      
        // toast.error("something was wrong")
        setIsLoader(false)
        setIsDeleteOpen(false)
      })
  }
  return (
    <>
      <div
        onClick={() => setIsDeleteOpen(true)}
        className='bg-red-700 px-2 !text-white  rounded'>Delete
      </div>
      <Transition.Root show={isDeleteOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={setIsDeleteOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center  justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                         quiz  Delete
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to remove quiz?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 md:flex-row py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    {isLoader ? (
                      <button
                        disabled
                        className="inline-flex justify-center items-center rounded-md !bg-red-600 h-9 w-full md:!w-20   text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        <DeleteLoaderIcon />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex justify-center items-center rounded-md !bg-red-600 h-9 w-full md:!w-20  text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    )}
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setIsDeleteOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
