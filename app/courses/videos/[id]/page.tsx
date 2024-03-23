import type { NextPage } from "next";

import VideoPage from '@/templates/VideoPage  /index'

const Video: NextPage = ({params}:any) => {
    const { id } = params
  
    return <VideoPage  id={id} />;
};

export default Video;
