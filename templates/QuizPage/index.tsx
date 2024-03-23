"use client";

import Layout from "@/components/Layout";
import Details from "./Details";
import Quizs from './Quizs'

const QuizPage  = ({id}:any) => {
 
    console.log(id)
    return (
        <Layout title="" info='' noLineHead>
            <div className="px-16 py-13 3xl:px-12 2xl:p-0">
                <Details />
                <Quizs id={id}/>
            </div>
        </Layout>
    );
};

export default QuizPage  ;
