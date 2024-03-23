"use client";

import Layout from "@/components/Layout";
import Details from "./Details";
import Videos from './Videos'

const VideoPage  = ({id}:any) => {
 
    console.log(id)
    return (
        <Layout title="" info='' noLineHead>
            <div className="px-16 py-13 3xl:px-12 2xl:p-0">
                <Details />
                <Videos id={id}/>
            </div>
        </Layout>
    );
};

export default VideoPage  ;
