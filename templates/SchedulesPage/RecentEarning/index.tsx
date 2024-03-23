import { BarChart, Bar, ResponsiveContainer } from "recharts";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import {
    recentEarning,
    dataRecentEarning,
    navRecentEarning,
} from "@/mocks/earning";
import { useState } from "react";

type RecentEarningProps = {};

const RecentEarning = ({}: RecentEarningProps) => {
    const [activeItem, setActiveItem] = useState<string>("1");
    const [activeButton, setActiveButton] = useState<string>("1");

    return (
        <div className="card-shadow grow ml-8 p-8 bg-white 2xl:mt-8 2xl:ml-0 dark:bg-dark-2">
            <div className="mb-3 text-h6">Recent Earning 🔥</div>
            <div className="flex items-center md:block">
                <div className="w-[22.5rem] -ml-4 3xl:w-[18rem] 2xl:w-[22.5rem] xl:w-[18rem] md:w-auto md:-mx-4">
                    {recentEarning.map((item) => (
                        <div
                            className={`flex items-center px-4 py-5 rounded-2xl cursor-pointer transition-colors hover:text-primary ${
                                activeItem === item.id
                                    ? "bg-[#FFEBF6] !text-black"
                                    : ""
                            }`}
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                        >
                            <div
                                className="shrink-0 w-22 rounded-xl"
                                style={{ backgroundColor: item.color }}
                            >
                                <Image
                                    className="w-22 h-20 object-contain"
                                    src={item.image}
                                    width={88}
                                    height={80}
                                    alt=""
                                />
                            </div>
                            <div className="grow -mt-1 pl-4">
                                <div className="flex justify-between items-center mb-0.5">
                                    <div className="text-title">
                                        {item.title}
                                    </div>
                                    <Icon
                                        className={`shrink-0 ml-3 dark:fill-white ${
                                            activeItem === item.id
                                                ? "dark:fill-black"
                                                : ""
                                        }`}
                                        name="arrow-right"
                                    />
                                </div>
                                <div className="mb-2 text-caption-1 text-grey">
                                    {item.details}
                                </div>
                                <div className="inline-block px-2.5 py-0.75 rounded-lg bg-primary text-caption-1 text-white">
                                    ${item.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grow px-4 text-center md:mt-6 md:px-0">
                    <div className="w-48 h-[9rem] mx-auto">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={150}
                                height={40}
                                data={dataRecentEarning}
                            >
                                <Bar dataKey="uv" fill="#A0D7E7" radius={4} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-5 text-title">Aug Earning</div>
                    <div className="mt-2 text-caption-2 text-grey">
                        18 July - 18 Agu
                    </div>
                    <button className="btn-black w-[11.25rem] mt-12">
                        <Icon className="mr-3 fill-white" name="plus-square" />
                        <span>Create New</span>
                    </button>
                </div>
            </div>
            <div className="flex mt-7 p-1 border border-grey-light rounded-2xl md:hidden dark:border-grey-light/10">
                {navRecentEarning.map((button) => (
                    <button
                        className={`group flex flex-col justify-center items-center w-1/4 h-14 rounded-xl text-caption-2 text-[#B2B3BD] transition-colors hover:text-primary ${
                            activeButton === button.id
                                ? "bg-primary !text-white"
                                : ""
                        }`}
                        key={button.id}
                        onClick={() => setActiveButton(button.id)}
                    >
                        <Icon
                            className={`mb-1 transition-colors group-hover:fill-primary dark:fill-white ${
                                activeButton === button.id ? "!fill-white" : ""
                            }`}
                            classSize="w-5 h-5"
                            name={button.icon}
                        />
                        {button.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RecentEarning;
