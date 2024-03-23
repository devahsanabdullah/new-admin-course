"use client";

import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import Editor from "@/components/Editor";
import Activity from "./Activity";

const CommentsPage = () => {
    return (
        <Layout title="Comments" noLineHead>
            <div className="pt-6 px-16 pb-12 2xl:p-0">
                <Banner
                    className="mb-12"
                    title="3 comments found."
                    content="Create Your Product Dashboard in Minutes"
                    titleButton="Mark all as read"
                />
                <div className="flex items-start xl:block">
                    <Activity />
                    <Editor
                        className="w-[22.5rem] pt-8 3xl:w-72 xl:w-full xl:pt-0"
                        title="Add a new comment"
                        titleButton="Reply Comment"
                        small
                    />
                </div>
            </div>
        </Layout>
    );
};

export default CommentsPage;
