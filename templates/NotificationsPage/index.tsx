"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Select from "@/components/Select";
import SearchForm from "@/components/SearchForm";
import Tabs from "@/components/Tabs";
import Notifications from "./Notifications";
import Filter from "./Filter";
import Notification from "./Notification";

const typeOptions = [
    {
        id: "0",
        title: "Recent Notifications",
    },
    {
        id: "1",
        title: "Last Notifications",
    },
    {
        id: "2",
        title: "New Notifications",
    },
];

const NotificationsPage = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [type, setType] = useState<any>(typeOptions[0]);
    const [category, setCategory] = useState<
        "clients" | "products" | "administrator" | "sales" | "withdrawals"
    >("clients");

    console.log(visible);

    const categories = [
        {
            title: "Clients",
            active: category === "clients",
            onClick: () => setCategory("clients"),
        },
        {
            title: "Products",
            active: category === "products",
            onClick: () => setCategory("products"),
        },
        {
            title: "Administrator",
            active: category === "administrator",
            onClick: () => setCategory("administrator"),
        },
        {
            title: "Sales",
            active: category === "sales",
            onClick: () => setCategory("sales"),
        },
        {
            title: "Withdrawals",
            active: category === "withdrawals",
            onClick: () => setCategory("withdrawals"),
        },
    ];

    return (
        <Layout title="Notifications" info="Unity Dashboard v.1">
            <div className="flex grow xl:block">
                <div className="container py-11 2xl:pr-12 2xl:py-0 xl:mb-10 xl:pr-0">
                    <div className="flex -mx-2 mb-6 md:block md:mx-0">
                        <Select
                            className="z-2 w-[calc(50%-1rem)] mx-2 md:w-full md:mx-0 md:mb-4"
                            value={type}
                            onChange={setType}
                            items={typeOptions}
                        />
                        <SearchForm className="w-[calc(50%-1rem)] mx-2 md:w-full md:mx-0" />
                    </div>
                    <Tabs className="mb-7" items={categories} />
                    <Notifications setValue={() => setVisible(true)} />
                </div>
                <div className="sidebar-border py-11 2xl:w-64 2xl:py-0 xl:w-full">
                    {visible ? <Notification /> : <Filter />}
                </div>
            </div>
        </Layout>
    );
};

export default NotificationsPage;
