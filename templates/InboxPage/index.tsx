"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import SearchForm from "@/components/SearchForm";
import Tabs from "@/components/Tabs";
import Icon from "@/components/Icon";
import Editor from "@/components/Editor";
import Messages from "./Messages";
import Message from "./Message";

const InboxPage = () => {
    const [type, setType] = useState<
        "your-inbox" | "archives" | "done" | "saved"
    >("your-inbox");

    const typeItems = [
        {
            title: "Your inbox",
            active: type === "your-inbox",
            onClick: () => setType("your-inbox"),
        },
        {
            title: "Archives",
            active: type === "archives",
            onClick: () => setType("archives"),
        },
        {
            title: "Done",
            active: type === "done",
            onClick: () => setType("done"),
        },
        {
            title: "Saved",
            active: type === "saved",
            onClick: () => setType("saved"),
        },
    ];

    return (
        <Layout
            classCenter="2xl:!max-w-full 2xl:!p-0 lg:!px-12 lg:!pt-6 lg:!pb-10 md:!pt-0 md:!px-4 md:!pb-8"
            title="Your Inbox"
            equalColumnsHead
        >
            <div className="flex grow lg:block">
                <div className="w-1/2 px-16 py-12 3xl:px-12 xl:px-10 lg:w-auto lg:p-0">
                    <SearchForm className="mb-6" advanceSearch />
                    <Tabs className="mb-7" items={typeItems} />
                    <Messages />
                </div>
                <div className="w-1/2 px-16 py-12 border-l border-grey-light 3xl:px-12 xl:px-10 lg:w-auto lg:mt-12 lg:p-0 lg:border-l-0 dark:border-grey-light/10">
                    <div className="flex mb-15 lg:mb-8">
                        <button className="btn-primary min-w-[8.75rem] mr-4 xl:min-w-[6.5rem] lg:h-12 lg:min-w-[7.5rem]">
                            Delete
                        </button>
                        <button className="btn-grey min-w-[8.75rem] xl:min-w-[6.5rem] lg:h-12 lg:min-w-[7.5rem]">
                            Archive
                        </button>
                        <button className="group btn-circle ml-auto shadow-[0_0.32rem_1.25rem_rgba(227,230,236,0.85)] dark:shadow-[0_0.32rem_1.25rem_rgba(0,0,0,0.3)]">
                            <Icon
                                className="transition-colors group-hover:fill-primary dark:fill-white"
                                name="dots-stroke"
                            />
                        </button>
                    </div>
                    <Message />
                    <Editor titleButton="Send Message" />
                </div>
            </div>
        </Layout>
    );
};

export default InboxPage;
