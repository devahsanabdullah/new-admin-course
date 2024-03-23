import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type ProfileProps = {
    visible?: boolean;
};

const Profile = ({ visible }: ProfileProps) => {
    const [show, setShow] = useState<boolean>(false);

    const menu = [
        {
            title: "Profile",
            icon: "profile",
        },
        {
            title: "Logout",
            icon: "logout",
        },
    ];

    return (
        <div
            className={`mt-10 rounded-xl md:hidden ${
                show ? "bg-[#f7f7f7] dark:bg-dark-1" : ""
            }`}
        >
            {show && (
                <div
                    className={`px-2 py-3 ${
                        visible ? "xl:p-0 lg:px-2 lg:py-3" : ""
                    }`}
                >
                    {menu.map((button, index) => (
                        <button
                            className={`group flex items-center w-full h-14 px-3 rounded-xl text-menu text-grey transition-colors hover:bg-white hover:text-black dark:hover:bg-dark-2 dark:hover:text-white ${
                                visible
                                    ? "xl:justify-center xl:text-0 lg:justify-stretch lg:text-[0.75rem]"
                                    : ""
                            }`}
                            key={index}
                        >
                            <Icon
                                className={`shrink-0 mr-4 fill-black/40 transition-colors group-hover:fill-black dark:fill-grey dark:group-hover:fill-white ${
                                    visible ? "xl:mr-0 lg:mr-4" : ""
                                }`}
                                name={button.icon}
                            />
                            {button.title}
                        </button>
                    ))}
                </div>
            )}
            <div
                className={`group relative z-2 flex items-center h-16 px-5 rounded-xl cursor-pointer transition-colors hover:bg-secondary ${
                    show ? "bg-secondary" : ""
                } ${
                    visible
                        ? "xl:h-14 xl:px-0 xl:justify-center lg:h-16 lg:px-5 lg:justify-stretch"
                        : ""
                }`}
                onClick={() => setShow(!show)}
            >
                <div className="shrink-0">
                    <Image
                        className="w-10 h-10 rounded-full opacity-100"
                        src="/images/avatar.png"
                        width={40}
                        height={40}
                        alt=""
                    />
                </div>
                <div
                    className={`w-[calc(100%-2.5rem)] pl-4 pr-6 text-nowrap ${
                        visible ? "xl:hidden lg:block" : ""
                    }`}
                >
                    <div
                        className={`text-menu truncate transition-colors group-hover:text-white ${
                            show ? "text-white" : ""
                        }`}
                    >
                        Tam Tran
                    </div>
                    <div
                        className={`text-caption-1 text-grey transition-colors group-hover:text-white ${
                            show ? "text-white" : ""
                        }`}
                    >
                        Free account
                    </div>
                </div>
                <Icon
                    className={`absolute top-1/2 right-5 -translate-y-1/2 transition-colors group-hover:fill-white dark:fill-white ${
                        show ? "fill-white" : ""
                    } ${visible ? "xl:hidden lg:inline-block" : ""}`}
                    name="arrows"
                />
            </div>
        </div>
    );
};

export default Profile;
