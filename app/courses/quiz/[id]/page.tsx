import type { NextPage } from "next";

import QuizPage from '@/templates/QuizPage/index'

const Quiz: NextPage = ({params}:any) => {
    const { id } = params
  
    return <QuizPage  id={id} />;
};

export default Quiz;
