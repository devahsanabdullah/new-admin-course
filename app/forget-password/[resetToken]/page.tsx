import ChangePassword from "@/components/Form/ChangePassword";
import type { NextPage } from "next";


const ResetToken:NextPage = ({params}:any) => {
    const { resetToken } = params
  
    return (

        <div className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
            <div className="bg-white py-6 px-10 sm:max-w-md  w-[450px] ">
                <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                  change password
                </div>
                <ChangePassword  resetToken={resetToken} />
            </div>
        </div>
      )
};

export default ResetToken;
