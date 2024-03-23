import { useState } from "react";
import Icon from "@/components/Icon";
import Timeline from "./Timeline";

import { navSchedule } from "@/mocks/schedule";

type ScheduleProps = {};

const Schedule = ({}: ScheduleProps) => {
    const [activeId, setActiveId] = useState<string>("1");

    return (
        <div className="flex card-shadow mt-8 p-8 pl-4 bg-white 2xl:block 2xl:p-0 2xl:shadow-none 2xl:rounded-none 2xl:bg-transparent dark:bg-dark-2 dark:2xl:bg-transparent">
            <div className="w-[19.25rem] 2xl:w-auto 2xl:p-8 2xl:card-shadow 2xl:bg-white dark:2xl:bg-dark-2">
                <div className="hidden text-h6 2xl:block">Small Timeline</div>
                <div className="-mt-2 space-y-6 2xl:flex 2xl:flex-wrap 2xl:-mx-4 2xl:space-y-0">
                    {navSchedule.map((item) => (
                        <div
                            className={`relative flex items-center px-4 py-2 rounded-xl cursor-pointer transition-colors hover:text-primary before:absolute before:top-full before:left-2 before:right-2 before:h-2 before:rounded-b-lg before:bg-[#CFC8FF] before:opacity-0 2xl:w-1/2 2xl:!mt-8 md:w-full md:!mt-6 ${
                                activeId === item.id
                                    ? "bg-primary !text-white before:opacity-100"
                                    : ""
                            }`}
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                        >
                            <div
                                className={`relative shrink-0 w-22 p-3 pb-2 rounded-xl text-center ${
                                    activeId === item.id
                                        ? "!bg-transparent"
                                        : ""
                                }`}
                                style={{ backgroundColor: item.color }}
                            >
                                <div
                                    className={`text-caption-2 text-grey dark:text-link ${
                                        activeId === item.id
                                            ? "!text-white"
                                            : ""
                                    }`}
                                >
                                    {item.day}
                                </div>
                                <div
                                    className={`-mt-1 text-h4 dark:text-link ${
                                        activeId === item.id
                                            ? "dark:!text-white"
                                            : ""
                                    }`}
                                >
                                    {item.number}
                                </div>
                                <div
                                    className={`absolute top-full left-2 right-2 h-2 opacity-50 rounded-b-xl ${
                                        activeId === item.id
                                            ? "!bg-transparent"
                                            : ""
                                    }`}
                                    style={{ backgroundColor: item.color }}
                                ></div>
                            </div>
                            <div className="grow pl-6">
                                <div className="flex justify-between items-center">
                                    <div className="mb-1 text-title">
                                        {item.title}
                                    </div>
                                    <Icon
                                        className={`-mt-1 shrink-0 ml-2 dark:fill-white ${
                                            activeId === item.id
                                                ? "fill-white"
                                                : ""
                                        }`}
                                        name="arrow-right"
                                    />
                                </div>
                                <div
                                    className={`mb-2 text-caption-2 text-grey ${
                                        activeId === item.id
                                            ? "!text-white"
                                            : ""
                                    }`}
                                >
                                    {item.details}
                                </div>
                                <div
                                    className={`inline-flex items-center h-6 px-2.5 rounded-lg bg-primary text-caption-1 text-white ${
                                        activeId === item.id
                                            ? "!bg-[#FFEBF6] !text-primary"
                                            : ""
                                    }`}
                                >
                                    {item.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="hidden btn-secondary w-full mt-6 2xl:block">
                    Add more
                </button>
            </div>
            <div className="grow pl-4 2xl:mt-8 2xl:pl-0">
                <Timeline />
            </div>
        </div>
    );
};

export default Schedule;
