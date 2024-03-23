"use client";

import Layout from "@/components/Layout";
import IconProgress from "@/components/IconProgress";
import Banner from "@/components/Banner";
import Schedule from "./Schedule";
import RecentEarning from "./RecentEarning";

import { iconProgress } from "@/mocks/iconProgress";

const SchedulesPage = () => {
    return (
        <Layout title="Schedules" noLineHead>
            <div className="pt-6 px-16 pb-12 2xl:p-0">
                <Banner
                    className=""
                    title="Unity Dashboard"
                    content="Create Your Product Dashboard in Minutes"
                    titleButton="New Schedule"
                />
                <Schedule />
                <div className="flex mt-8 2xl:block">
                    <IconProgress
                        className="shrink-0 w-[18.6rem] 2xl:w-full"
                        items={iconProgress}
                    />
                    <RecentEarning />
                </div>
            </div>
        </Layout>
    );
};

export default SchedulesPage;
