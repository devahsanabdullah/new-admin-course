"use client";

import Layout from "@/components/Layout";
import Details from "./Details";
import Courses from './Courses'

const CoursesPage = () => {
    return (
        <Layout title="Welcome back 🎉" noLineHead>
            <div className="px-16 py-13 3xl:px-12 2xl:p-0">
                <Details />
                <Courses />
            </div>
        </Layout>
    );
};

export default CoursesPage;
