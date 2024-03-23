import Image from "@/components/Image";
import Icon from "@/components/Icon";
import ChartLine from "./ChartLine";
import ChartUsers from "./ChartUsers";

const items = [
    {
        title: "Users",
        value: "36k",
        percent: 50,
        icon: "/images/folder.svg",
        color: "#6C5DD3",
    },
    {
        title: "Clicks",
        value: "1m",
        percent: 60,
        icon: "/images/activity.svg",
        color: "#FFA2C0",
    },
    {
        title: "Sales",
        value: "327$",
        percent: 25,
        icon: "/images/bag.svg",
        color: "#7FBA7A",
    },
    {
        title: "Items",
        value: "68",
        percent: 80,
        icon: "/images/chat.svg",
        color: "#FF9A7B",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className="card-shadow p-8 pb-9 bg-white dark:bg-dark-2">
        <div className="mb-10 text-h6 md:mb-8">Active Users right now 💡</div>
        <div className="flex pb-4 mb-3.5 md:block">
            <div className="shrink-0 w-32 2xl:w-36 xl:w-32 md:flex md:justify-between md:w-full md:mb-8">
                <div className="mb-4 md:grow md:mb-0">
                    <div className="-mt-1 mb-4 text-h1">478</div>
                    <div className="flex items-center pb-4 border-b border-grey-light text-caption-2 text-link md:pb-0 md:border-b-0 dark:border-grey-light/10">
                        <div className="shrink-0 w-8 mr-4">
                            <Image
                                className="w-full"
                                src="/images/details-pic.png"
                                width={32}
                                height={32}
                                alt=""
                            />
                        </div>
                        Page views per minute
                    </div>
                </div>
                <div className="md:shrink-0 md:w-32 md:ml-5 md:pt-4">
                    <div className="flex mb-5 md:mb-9">
                        <ChartLine />
                        <div className="flex items-center ml-2">
                            <div className="flex justify-center items-center shrink-0 w-4 h-4 mr-1 bg-secondary rounded-full">
                                <Icon
                                    className="fill-white"
                                    classSize="w-4 h-4"
                                    name="arrow-down-fat"
                                />
                            </div>
                            <div className="text-caption-2 text-link">6%</div>
                        </div>
                    </div>
                    <div className="text-caption-2 text-[#B2B3BD]">
                        Update your payout method in Settings
                    </div>
                </div>
            </div>
            <div className="relative grow ml-4 p-6 bg-secondary rounded-2xl md:ml-0">
                <button className="group absolute z-2 top-2 right-2 w-6 h-6 rounded-full bg-white text-0 dark:bg-dark-2">
                    <Icon
                        className="transition-transform group-hover:rotate-90 dark:fill-white"
                        name="close-fat"
                    />
                </button>
                <ChartUsers />
            </div>
        </div>
        <div className="flex border border-grey-light rounded-2xl md:flex-wrap md:overflow-hidden dark:border-grey-light/10">
            {items.map((item, index) => (
                <div
                    className="w-1/4 p-6 border-r border-grey-light last:border-r-0 md:w-1/2 md:-mt-0.25 md:border-t md:border-grey-light md:even:border-r-0 md:px-5 dark:border-grey-light/10"
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
                    <div className="text-h3 3xl:text-h4 2xl:text-h3 xl:text-h4 md:text-h3">
                        {item.value}
                    </div>
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
