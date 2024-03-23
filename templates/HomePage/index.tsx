"use client";

import Layout from "@/components/Layout";
import AffiliateImpressions from "@/components/AffiliateImpressions";
import Slider from "./Slider";
import EarningItems from "./EarningItems";
import EarningChart from "./EarningChart";
import Earning from "./Earning";
import {useAxios} from '@/components//services/http.service'
import { useQuery } from 'react-query'
import EarningCourse from "./Earning/EarningCourse";
const HomePage = () => {
    const {  get } = useAxios()
    const fetchData = async () => {
         
        let endpoint = `dashboard?year=2024`

      
    
        const response = await get(endpoint)
      
   
      return response?.data
    }
    const { data } = useQuery(
        ['dashboard'],
        fetchData,
        {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false
        }
      )

function getMonthName(month:any) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    return monthNames[month - 1] || '';
  }
  
const stat = data?.userCounters.map((counter:any) => ({
    name: getMonthName(counter.month), // Assuming you have a function to get the month name
    uv: counter.count,
  }));
    return (
        <Layout title="Welcome back👋" hideBannerSidebar>
            <div className="flex grow 2xl:block">
                <div className="container py-11 2xl:py-0">
                    <Slider   />
                    <div className="flex -mx-4 md:block md:mx-0">
                        <EarningItems course={data?.result} />
                        <EarningChart  stat={stat} />
                    </div>
                </div>
                <div className="sidebar-border py-11 2xl:py-0 2xl:flex 2xl:items-start 2xl:-mx-4 2xl:mt-8 md:block md:mx-0">
                    <Earning total={data?.totalUser}/>
                  <EarningCourse total={data?.totalCourse} />
                    {/* <AffiliateImpressions className="2xl:w-[calc(50%-2rem)] 2xl:mx-4 2xl:pt-8 md:w-full md:mx-0" /> */}
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
