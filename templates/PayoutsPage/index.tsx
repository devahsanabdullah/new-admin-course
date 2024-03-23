"use client";

import Layout from "@/components/Layout";
import PaymentMethod from "./PaymentMethod";
import EarningMonth from "./EarningMonth";
import WithdrawHistory from "./WithdrawHistory";

const PayoutsPage = () => {
    return (
        <Layout title="Your Payouts" noLineHead>
            <div className="flex 2xl:block">
                <div className="container pt-12 pb-16 2xl:mb-8 2xl:p-0">
                    <PaymentMethod />
                </div>
                <div className="sidebar pt-12 pb-16 2xl:p-0">
                    <EarningMonth />
                </div>
            </div>
            <div className="p-16 border-t border-grey-light 2xl:mt-16 2xl:p-0 2xl:border-t-0 md:mt-8 dark:border-grey-light/10">
                <WithdrawHistory />
            </div>
        </Layout>
    );
};

export default PayoutsPage;
