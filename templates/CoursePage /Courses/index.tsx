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
import CreateModelCourse from '@/components/Model/CreateModelCourse'
import UpdateCourseModel from '@/components/Model/UpdateCourseModel'
import DeleteCourseModel from '@/components/Model/DeleteCourseModel'
import { useRouter } from "next/navigation";
type ProductsProps = {};

const Courses = ({}: ProductsProps) => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState(products);
    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState<any>('')
  const router =useRouter()
    const handleCheckboxChange = (checkboxId: string) => {
        const updatedCheckboxes = [...checkboxes];
        const checkboxIndex = updatedCheckboxes.findIndex(
            (checkbox) => checkbox.id === checkboxId
        );
        updatedCheckboxes[checkboxIndex].isChecked =
            !updatedCheckboxes[checkboxIndex].isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    const handleSelectAll = (value: boolean) => {
        setSelectAll(value);
        const updatedCheckboxes = [...checkboxes];
        for (let checkbox of checkboxes) {
            checkbox.isChecked = value;
        }
        setCheckboxes(updatedCheckboxes);
    };
    const {  get } = useAxios()
    const fetchData = async () => {

        let endpoint = `/course?page=${currentPage}`

        if (searchText) {
          endpoint = `/course?page=${currentPage}&search=${searchText}`
        }
    
        const response = await get(endpoint)
       
        if (response) {
          setCurrentPage(response?.data?.currentPage)
        }
   
      return response?.data
    }
    const { data: userData, isLoading } = useQuery(
        ['course',currentPage, searchText],
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
        <CreateModelCourse />
       
        </div>
        {userData?.courses?.length === 0 ? (
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
                       Course Name
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                    Category
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        Level
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        description
                    </div>
                    <div className="table-cell align-middle pl-5 pb-6 md:hidden">
                        Action
                    </div>
                </div>
                {userData?.courses?.map((product:any) => (
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
                                    <Image
                                        className="w-full"
                                        src={`${product?.image}`}
                                        width={96}
                                        height={72}
                                        alt=""
                                    />
                                </div>
                                <div className="grow">
                                    <div className="mb-2 text-title">
                                        {product?.title}
                                    </div>
                                    <div className="text-caption-1 text-grey">
                                        {product?.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            {product?.category} 
                        </div>
                      
                        <div className="table-cell align-middle pl-5 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            <div className="group relative cursor-pointer">
                                <div className="text-link">
                                {product?.level} 
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
                            <button onClick={()=>router.push(`/courses/videos/${product._id}`)} className='bg-primary !text-white px-2 rounded'>Videos</button>
                            <button onClick={()=>router.push(`/courses/quiz/${product._id}`)} className='bg-primary px-2 !text-white  rounded'>Quiz</button>
                            <UpdateCourseModel item={product}/>
                        <DeleteCourseModel id={product._id} />
                            
                            </div>
                        </div>
                       
                    </div>
                ))}
            </div>
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

export default Courses;
