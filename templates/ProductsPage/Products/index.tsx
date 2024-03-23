import { useState } from "react";
import Sorting from "@/components/Sorting";
import Checkbox from "@/components/Checkbox";
import Image from "@/components/Image";
import Pagination from "@/components/Pagination/Pagination";
import { products } from "@/mocks/products";
import {useAxios} from '@/components//services/http.service'
import { useQuery } from 'react-query'
import SearchInput from '@/components/SearchInput/SearchInput'
import SkeletonLoading from '@/components/SkeletonLoading/SkeletonLoading'
type ProductsProps = {};

const Products = ({}: ProductsProps) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState<any>('')
 
    const {  get } = useAxios()
    const fetchData = async () => {
   
      let endpoint = `/allUser?page=${currentPage}`

      if (searchText) {
        endpoint = `/allUser?page=${currentPage}&search=${searchText}`
      }
      const response = await get(endpoint)
      return response?.data
    }
    const { data: userData, isLoading } = useQuery(
        ['userData',currentPage, searchText],
        fetchData,
        {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false
        }
      )
      console.log(userData?.allUsers)
    return (
        <div className="relative mt-8 p-8 rounded-3xl bg-white card-shadow md:p-6 md:pt-8 dark:bg-dark-2">
            {/* <Sorting /> */}
            <div className='flex  justify-between items-center'>
            <div className="w-1/2">
          <SearchInput
            setSearchText={setSearchText}
            setCurrentPage={setCurrentPage}
          />

        </div>

       
        </div>
        {userData?.users?.length === 0 ? (
        <div className="flex justify-center items-center">
          <img
            src="/images/noData.jpg"
            className="w-[400px] flex justify-center h-[400px] object-cover"
          />
        </div>
      ) : (
        <>
        {isLoading ? (
        <div className="flex flex-col px-5 mt-8 w-full">
          {[...Array(8)].map((_, i) => (
            <SkeletonLoading
              key={i}
              height="50px"
              borderRadius="0px"
              width="100%"
            />
          ))}
        </div>
      ) : (
        <>
            <div className="table w-full mt-10 border-b border-grey-light md:-mt-8.5 md:block md:w-auto md:-mx-6 dark:border-grey-light/10">
                <div className="table-row text-caption-1 text-[#B2B3BD] md:flex md:items-center md:pl-6">
                    {/* <div className="table-cell align-middle w-5 pb-6">
                        <Checkbox
                            className="mb-5 last:mb-0"
                            value={selectAll}
                            onChange={() => handleSelectAll(!selectAll)}
                        />
                    </div> */}
                    <div className="table-cell align-middle pl-4 pb-6 md:pl-6">
                        Name
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                    Company
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        phone Number
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        Role
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        Enrollment Course
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        Complete Course
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        Active
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        status
                    </div>
                </div>
                {userData?.users?.map((product:any) => {

 const dateObject = new Date(product?.userLastActive);
 const formattedDate = dateObject.toLocaleDateString();
                    return(

                    

                    
                    <div
                        className="table-row md:flex md:items-center md:flex-wrap md:p-6 md:border-t md:border-grey-light dark:md:border-grey-light/10"
                        key={product?._id}
                    >
                        {/* <div className="table-cell align-middle w-5 py-8 border-t border-grey-light md:py-0 md:border-t-0 dark:border-grey-light/10">
                            <Checkbox
                                className="mb-5 last:mb-0"
                                value={product?.isChecked}
                                onChange={() =>
                                    handleCheckboxChange(product?._id)
                                }
                            />
                        </div> */}
                        <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light md:grow md:pl-6 md:py-0 md:border-t-0 dark:border-grey-light/10">
                            <div className="flex items-center">
                                {/* <div className="relative shrink-0 w-24 mr-6 rounded-lg bg-[#A0D7E7] before:absolute before:z-1 before:top-full before:left-2 before:right-2 before:h-2 before:rounded-b-lg before:bg-[#E7FAFF] xl:w-18 xl:mr-4">
                                    <Image
                                        className="w-full"
                                        src={product?.image}
                                        width={96}
                                        height={72}
                                        alt=""
                                    />
                                </div> */}
                                <div className="grow">
                                    <div className="mb-2 text-title">
                                        {product?.name}
                                    </div>
                                    <div className="text-caption-1 text-grey">
                                        {product?.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            {product?.company} 
                        </div>
                      
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            {product?.phone} 
                        </div>
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            <span className="text-green">
                                {product?.role}
                            </span>
                           
                        </div>
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            <span className="text-green">
                                {product?.Enrolment?.length}
                            </span>
                           
                        </div>
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            <span className="text-green">
                                {product?.completeCourses?.length}
                            </span>
                           
                        </div>
                       
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            <span className="text-green">
                                {formattedDate}
                            </span>
                           
                        </div>
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            
                            <span className="ml-2 text-grey">
                            {product?.verified?"Active":"In-Active"}
                            </span>
                        </div>
                       
                    </div>
                )})}
            </div>
            {/* <div className="mt-10 text-center 2xl:mt-6">
                <button className="btn-black min-w-[10.5rem]">Load More</button>
            </div> */}
              <div className="flex justify-end">
                <Pagination
                  currentPage={currentPage}
                  totalPages={userData?.totalPages}
                 
                  setCurrentPage={setCurrentPage}
                />
                </div>
                </>
                )}
       </>
      )}
        </div>
    );
};

export default Products;
