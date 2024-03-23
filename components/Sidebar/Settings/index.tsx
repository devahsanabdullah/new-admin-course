import { useState } from "react";
import Tabs from "@/components/Tabs";
import Image from "@/components/Image";
import Field from "@/components/Field";
import { useAxios } from '@/components/services/http.service';
import { useDispatch,useSelector } from '@/components/store/index';
import { setUserDetails } from '@/components/store/reducers/auth/authReducer';
import { useRouter } from "next/navigation"; 
import { toast } from 'react-toastify';

type SettingsProps = {setVisibleModal:any};

const Settings = ({setVisibleModal}: SettingsProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const { put,setBearerToken ,post} = useAxios();
    const router = useRouter();
    const dispatch = useDispatch();
    const {userData,token} = useSelector((state: any) => state.authReducer); 
    console.log(userData)
    const [type, setType] = useState<
        "profile" | "password" | "email" | "notification" | "settings"
    >("profile");
    const [name, setName] = useState<string>(userData?.name);
    const [email, setEmail] = useState<string>(userData?.email);
    const [company, setCompany] = useState<string>(userData?.company);
    const [services, setServices] = useState<string>(userData?.services);
    const [currentPassword,setCurrentPassword]=useState<string>("");
    const [NewPassword,setNewPassword]=useState<string>("");
    const [ConfirmPassword,setconfirmPassword]=useState<string>("");

    const typeItems = [
        {
            title: "Profile",
            active: type === "profile",
            onClick: () => setType("profile"),
        },
        {
            title: "Password",
            active: type === "password",
            onClick: () => setType("password"),
        },
        // {
        //     title: "Email",
        //     active: type === "email",
        //     onClick: () => setType("email"),
        // },
        // {
        //     title: "Notification",
        //     active: type === "notification",
        //     onClick: () => setType("notification"),
        // },
        // {
        //     title: "Settings",
        //     active: type === "settings",
        //     onClick: () => setType("settings"),
        // },
    ];

    const handleSubmit = () => {
        const values={
            services,
            company,
            email,
            name
        }
        setBearerToken(token)
        put('/admin/profileUpdate', values)
        .then((response) => {
          const result = response?.data;
          console.log(result,"result")
          dispatch(setUserDetails({ token:token, userData: result?.user }));
          toast.success('Login Success');
          setVisibleModal(false)
        //   router.push('/loading');
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.msg || 'An error occurred';
          toast.error(errorMessage);
          setVisibleModal(false)
         
        //   setIsLoading(false);
        });
    }

    const handleChangeSubmit = () => {
        const values={
            currentPassword,
            NewPassword,
          
        }
        if(NewPassword !==ConfirmPassword)
        {
            toast.error("New Password and Confirm Password don't match.");
        }
     
        setBearerToken(token)
        post('/admin/changePassword', values)
        .then((response) => {
          const result = response?.data;
          console.log(result,"result")
      
          toast.success('Successful chnage password');
          setVisibleModal(false)
        //   router.push('/loading');
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.message || 'An error occurred';
          toast.error(errorMessage);
          setVisibleModal(false)
         
        //   setIsLoading(false);
        });
    }
    return (
        <div className="">
            <div className="mb-14 text-h6">Account Settings</div>
            <Tabs
                className="mb-8 md:-mx-8 md:before:w-8 md:after:w-8"
                items={typeItems}
            />
            {/* <div className="mb-8 text-caption-2 text-[#B2B3BD]">
                Your Avatar
            </div> */}
            {/* <div className="flex items-start">
                <div className="shrink-0 w-16 h-16 mr-10 md:mr-8 md:w-20 md:h-20">
                    <Image
                        className="w-full h-full rounded-full object-cover"
                        src="/images/avatar-1.png"
                        width={64}
                        height={64}
                        alt=""
                    />
                </div>
                <div className="flex space-x-4 md:flex-col md:space-x-0 md:grow">
                    <div className="relative">
                        <button className="btn-primary min-w-[10.5rem] h-10 md:w-full">
                            Upload New
                        </button>
                        <input
                            className="absolute inset-0 opacity-0"
                            type="file"
                        />
                    </div>
                    <button className="btn-grey min-w-[10.5rem] h-10 md:bg-transparent md:hover:bg-transparent">
                        Delete Avatar
                    </button>
                </div>
            </div> */}
            {/* <div className="-mt-3 pl-[6.5rem] text-[#B2B3BD] md:mt-8 md:pl-0">
                Avatar help your teammates recognize you in Unity.
            </div> */}
            {type=='profile' &&
            <div
                className="mt-8 pt-8 border-t border-grey-light dark:border-grey-light/10"
              
               
            >
                <div className="flex space-x-4 mb-5 md:block md:space-x-0 md:space-y-5">
                    <Field
                        className="flex-1"
                        label="Your Full Name"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        required
                    />
                    <Field
                        className="flex-1"
                        label="Email "
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex space-x-4 mb-5 md:block md:space-x-0 md:space-y-5">
                    <Field
                        className="flex-1"
                        label="company"
                        value={company}
                        onChange={(e: any) => setCompany(e.target.value)}
                        required
                    />
                    <Field
                        className="flex-1"
                        label="services"
                        value={services}
                        onChange={(e: any) => setServices(e.target.value)}
                        required
                    />
                </div>
               
              
                <button onClick={()=>handleSubmit()} className="btn-black px-8 md:w-full">
                    Update Profile
                </button>
            </div>}

            {type=='password' &&
            <div
                className="mt-8 pt-8 border-t border-grey-light dark:border-grey-light/10"
              
               
            >
                <div className="flex space-x-4 mb-5 md:block md:space-x-0 md:space-y-5">
                    <Field
                        className="flex-1"
                        label="Current Password"
                        type='password'
                        value={currentPassword}
                        onChange={(e: any) => setCurrentPassword(e.target.value)}
                        required
                    />
            
                </div>
                <div className="flex space-x-4 mb-5 md:block md:space-x-0 md:space-y-5">
                    <Field
                        className="flex-1"
                        label="New password"
                        type='password'
                        value={NewPassword}
                        onChange={(e: any) => setNewPassword(e.target.value)}
                        required
                    />
                  
                </div>
               
                <div className="flex space-x-4 mb-5 md:block md:space-x-0 md:space-y-5">
                    <Field
                        className="flex-1"
                        label="Confirm password"
                        type='password'
                        value={ConfirmPassword}
                        onChange={(e: any) => setconfirmPassword(e.target.value)}
                        required
                    />
                  
                </div>
                <button onClick={()=>handleChangeSubmit()} className="btn-black px-8 md:w-full">
                    Chnage Password
                </button>
            </div>}
        </div>
    );
};

export default Settings;
