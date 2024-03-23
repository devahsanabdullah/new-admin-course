import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Dropdown from "@/components/Dropdown";
import ChartLine from "./ChartLine";
import ChartArea from "./ChartArea";

import { projects } from "@/mocks/projects";

const items = [
    {
        title: "Total Earnings",
        value: 586.75,
        percent: 50,
        icon: "/images/folder.svg",
        color: "#6C5DD3",
    },
    {
        title: "Item Earnings",
        value: 425.94,
        percent: 60,
        icon: "/images/activity.svg",
        color: "#FFA2C0",
    },
    {
        title: "Tax withheld",
        value: 25.94,
        percent: 60,
        icon: "/images/bag.svg",
        color: "#3F8CFF",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className="card-shadow p-8 pb-9 bg-white dark:bg-dark-2">
        <div className="relative z-2 flex justify-between items-center -mt-4 -mr-3 mb-5 md:block md:mt-0 md:mx-0">
            <div className="text-h6 md:mb-6">Active Users right now 💡</div>
            <Dropdown
                className="w-[12.5rem] md:w-full"
                title="Last 30 days"
                items={projects}
            />
        </div>
        <div className="flex pb-4 mb-3.5 md:block md:mb-3">
            <div className="shrink-0 w-36 md:w-full">
                <div className="-mt-1 mb-4 text-h1">$586</div>
                <div className="flex items-center mb-4 pb-4 border-b border-grey-light text-caption-2 text-link dark:border-grey-light/10">
                    <div className="shrink-0 w-8 mr-4">
                        <Image
                            className="w-full"
                            src="/images/details-pic-1.png"
                            width={32}
                            height={32}
                            alt=""
                        />
                    </div>
                    Your total earnings
                </div>
                <div className="flex mb-5 md:max-w-[12rem]">
                    <ChartLine />
                    <div className="flex items-center ml-2">
                        <div className="flex justify-center items-center shrink-0 w-4 h-4 mr-1 bg-green rounded-full">
                            <Icon
                                className="fill-white rotate-180"
                                classSize="w-4 h-4"
                                name="arrow-down-fat"
                            />
                        </div>
                        <div className="text-caption-2 text-green">6%</div>
                    </div>
                </div>
                <div className="text-caption-2 text-[#B2B3BD]">
                    Update your payout method in Settings
                </div>
            </div>
            <div className="relative grow ml-4 pt-4 pl-6 md:mt-8 md:ml-0 md:p-0">
                <ChartArea />
            </div>
        </div>
        <div className="flex border border-grey-light rounded-2xl md:block dark:border-grey-light/10">
            {items.map((item, index) => (
                <div
                    className="w-1/3 p-6 border-r border-grey-light last:border-r-0 md:w-full md:border-r-0 md:border-b md:border-grey-light md:last:border-b-0 dark:border-grey-light/10"
                    key={index}
                >
                    <div className="flex items-center mb-2 text-caption-2 text-grey">
                        <div
                            className="flex justify-center items-center w-4 h-4 mr-2 rounded-md"
                            style={{ backgroundColor: item.color }}
                        >
                            <Image
                                className="w-2"
                                src={item.icon}
                                width={8}
                                height={8}
                                alt=""
                            />
                        </div>
                        {item.title}
                    </div>
                    <div className="mb-3 text-h4">${item.value}</div>
                    <div className="relative h-0.5 rounded-full bg-grey-light dark:bg-grey-light/10">
                        <div
                            className="absolute top-0 left-0 bottom-0 rounded-full"
                            style={{
                                width: item.percent + "%",
                                backgroundColor: item.color,
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Details;
