"use client";

import Layout from "@/components/Layout";
import Details from "./Details";
import Products from "./Products";

const ProductsPage = () => {
    return (
        <Layout title="Welcome back 🎉" noLineHead>
            <div className="px-16 py-13 3xl:px-12 2xl:p-0">
                <Details />
                <Products />
            </div>
        </Layout>
    );
};

export default ProductsPage;
