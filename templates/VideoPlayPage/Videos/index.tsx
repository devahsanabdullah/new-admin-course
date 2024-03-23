import { useEffect, useState } from "react";
import { products } from "@/mocks/products";
import {useAxios} from '@/components//services/http.service'
import { useQuery } from 'react-query'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'
type ProductsProps = {id:any};

const Videos = ({id}: ProductsProps) => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState(products);
    const [currentPage, setCurrentPage] = useState(1)
    const [searchText, setSearchText] = useState<any>('')
 
  
    const {  get } = useAxios()
    const fetchData = async () => {
          if(!id) return;
        let endpoint = `/video/${id}`

       
    
        const response = await get(endpoint)
      
   
      return response?.data
    }
    const { data: videoData, isLoading } = useQuery(
        ['videos',currentPage, searchText],
        fetchData,
        {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false
        }
      )

      let videoType
    //  const videoLink ="https://res.cloudinary.com/dzkk7ubqq/raw/upload/v1708028096/igwohmtu9mzx0neqt64g.mp4"
      if (videoData?.singlevideo) {
        const videoExtension = videoData.singlevideo.videoLink.split('.').pop()?.toLowerCase()
        videoType =
          videoExtension === 'mp4'
            ? 'video/mp4'
            : videoExtension === 'webm'
            ? 'video/webm'
            : undefined
      }
      console.log(videoData,"dsad")
    return (
      <>
      <p className="py-5 text-4xl font-bold">{videoData?.singlevideo?.title}</p>
      <div className="relative">
      {videoData?.singlevideo?.videoLink && videoType && (
        <Plyr
        style={{ width: '100%', height: '100%' }}
          // poster={'/images/football.jpg'}
          source={{
            type: 'video',
            sources: [
              {
                src: videoData?.singlevideo?.videoLink,
                type: videoType,
                size: 720,
             
              }
            ]
          }}
          
          options={{
          
            controls: [
              'rewind',
              'play',
              'fast-forward',
              'progress',
              'current-time',
              'duration',
              'mute',
              'pip',
              'volume',
              'settings',
              'fullscreen',
              'download'
            ],
            ratio: '16:9',
          }}
        />
      )}
    </div>
    <p className='pt-10 text-3xl '>What will I learn?</p>
    <p className='pt-5 text-xl '>{videoData?.singlevideo?.description}</p>
    </>
    );
};

export default Videos;
