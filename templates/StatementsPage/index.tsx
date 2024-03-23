"use client";

import Layout from "@/components/Layout";
import Details from "./Details";
import Statement from "./Statement";
import EarningsItem from "./EarningsItem";
import TopItems from "./TopItems";

const StatementsPage = () => {
    return (
        <Layout title="Earnings Report">
            <div className="flex grow 2xl:block">
                <div className="container py-11 2xl:py-0">
                    <Details />
                    <Statement />
                </div>
                <div className="sidebar-border py-11 2xl:py-0 2xl:flex 2xl:items-start 2xl:-mx-4 2xl:mt-8 md:block md:mx-0">
                    <EarningsItem />
                    <TopItems />
                </div>
            </div>
        </Layout>
    );
};

export default StatementsPage;
