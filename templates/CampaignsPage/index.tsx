"use client";

import Layout from "@/components/Layout";
import AffiliateImpressions from "@/components/AffiliateImpressions";
import IconProgress from "@/components/IconProgress";
import Details from "./Details";
import Users from "./Users";
import Income from "./Income";
import Sales from "./Sales";
import Goal from "./Goal";

import { iconProgress } from "@/mocks/iconProgress";

const CampaignsPage = () => {
    return (
        <Layout title="Campaigns">
            <div className="flex grow 2xl:block">
                <div className="container py-11 2xl:py-0">
                    <Details />
                    <div className="flex mt-8 -mx-4 md:block md:mx-0">
                        <Users />
                        <Income />
                    </div>
                    <div className="flex mt-8 -mx-4 md:block md:mx-0">
                        <IconProgress
                            className="w-[calc(50%-2rem)] mx-4 md:w-full md:mx-0"
                            items={iconProgress.slice(0, 3)}
                        />
                        <Sales />
                    </div>
                </div>
                <div className="sidebar-border py-11 2xl:flex 2xl:-mx-4 2xl:mt-8 2xl:py-0 md:block md:mx-0">
                    <Goal />
                    <AffiliateImpressions className="2xl:w-[calc(50%-2rem)] 2xl:mx-4 2xl:pt-8 md:w-full md:mt-8 md:mx-0 md:pt-0" />
                </div>
            </div>
        </Layout>
    );
};

export default CampaignsPage;
