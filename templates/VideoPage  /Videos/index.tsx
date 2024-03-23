import { useState } from "react";
import Sorting from "@/components/Sorting";
import Checkbox from "@/components/Checkbox";
import Image from "@/components/Image";
import SearchInput from '@/components/SearchInput/SearchInput'
import { products } from "@/mocks/products";
import {useAxios} from '@/components//services/http.service'
import { useQuery } from 'react-query'
import Pagination from "@/components/Pagination/Pagination";
import SkeletonLoading from '@/components/SkeletonLoading/SkeletonLoading'
import CreateVideoModal from '@/components/Model/CreateVideoModal'
import UpdateVideoModel from '@/components/Model/UpdateVideoModel'
import DeleteVideoModal from '@/components/Model/DeleteVideoModal'
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
type ProductsProps = {id:any};

const Videos = ({id}: ProductsProps) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState<any>('')
  const router =useRouter()
  const path =useParams()



  
    const {  get } = useAxios()
    const fetchData = async () => {
          if(!id) return;
        let endpoint = `/course/${id}/videos?page=${currentPage}`

        if (searchText) {
          endpoint = `/course/${id}/videos?page=${currentPage}&search=${searchText}`
        }
    
        const response = await get(endpoint)
       
        if (response) {
          setCurrentPage(response?.data?.currentPage)
        }
   
      return response?.data
    }
    const { data: videoData, isLoading } = useQuery(
        ['videos',currentPage, searchText,id],
        fetchData,
        {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false
        }
      )
  
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
        <CreateVideoModal id={id}/>
       
        </div>
        {videoData?.videos?.length === 0 ? (
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
                       Video title
                    </div>
                   
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        description
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        Action
                    </div>
                </div>
                {videoData?.videos?.map((product:any) => (
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
                                <div className="relative shrink-0 w-24 mr-6 rounded-lg bg-[#A0D7E7] before:absolute before:z-1 before:top-full before:left-2 before:right-2 before:h-2 before:rounded-b-lg before:bg-[#E7FAFF] xl:w-18 xl:mr-4">
                                    {/* <Image
                                        className="w-full"
                                        src={`${product?.image}`}
                                        width={96}
                                        height={72}
                                        alt=""
                                    /> */}
                                </div>
                                <div className="grow">
                                    <div className="mb-2 text-title">
                                        {product?.title}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                      
                      
                      
                        <div  className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            <span className="text-green">
                                {product?.description}
                            </span>
                           
                        </div>
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            <div className='flex space-x-3'>
                            <button onClick={()=>router.push(`/courses/view/${product._id}`)} className='bg-primary !text-white px-2 rounded'>View</button>
                           
                            <UpdateVideoModel id={id} item={product}/>
                        <DeleteVideoModal id={id} videoId={product._id} />
                            
                            </div>
                        </div>
                       
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
                <Pagination
                  currentPage={currentPage}
                  totalPages={videoData?.totalPages}
                 
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

export default Videos;
