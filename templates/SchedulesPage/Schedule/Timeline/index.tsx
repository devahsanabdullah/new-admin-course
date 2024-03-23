const legend = [
    {
        title: "Small note",
        color: "#7FBA7A",
    },
    {
        title: "Small note",
        color: "#6C5DD3",
    },
    {
        title: "Small note",
        color: "#E4E4E4",
    },
];

type TimelineProps = {};

const Timeline = ({}: TimelineProps) => (
    <div className="2xl:p-8 2xl:card-shadow 2xl:bg-white dark:2xl:bg-dark-2">
        <div className="mb-8 text-h6">Big Timeline</div>
        <div className="md:flex md:-mx-8 md:overflow-auto md:scrollbar-none md:before:shrink-0 md:before:w-8 md:after:shrink-0 md:after:w-8 md:pb-2">
            <div className="relative max-w-[36.625rem] border border-grey-light rounded-2xl after:absolute after:top-full after:left-3.5 after:right-3.5 after:h-2 after:rounded-b-lg after:border-x after:border-b after:border-grey-light md:shrink-0 md:w-[36.625rem] dark:border-grey-light/10 dark:after:border-grey-light/10">
                <div className="flex items-center h-17 border-b border-grey-light dark:border-grey-light/10">
                    <div className="shrink-0 w-[8.6rem] pl-8 text-caption-1 text-grey">
                        Aug
                    </div>
                    <div className="flex grow">
                        <div className="w-1/6">
                            <div className="relative inline-flex justify-center items-center w-8 h-8 -ml-4 rounded-full text-center text-menu before:absolute before:top-1.5 before:-right-1 before:w-2.5 before:h-2.5 before:rounded-full before:bg-green">
                                M
                            </div>
                        </div>
                        <div className="w-1/6">
                            <div className="relative inline-flex justify-center items-center w-8 h-8 -ml-4 rounded-full text-center text-menu before:absolute before:top-1.5 before:-right-1 before:w-2.5 before:h-2.5 before:rounded-full before:bg-green">
                                T
                            </div>
                        </div>
                        <div className="w-1/6">
                            <div className="relative inline-flex justify-center items-center w-8 h-8 -ml-4 bg-orange rounded-full text-center text-menu text-white">
                                W
                            </div>
                        </div>
                        <div className="w-1/6">
                            <div className="relative inline-flex justify-center items-center w-8 h-8 -ml-4 rounded-full text-center text-menu">
                                Th
                            </div>
                        </div>
                        <div className="w-1/6">
                            <div className="relative inline-flex justify-center items-center w-8 h-8 -ml-4 rounded-full text-center text-menu before:absolute before:top-1.5 before:-right-1 before:w-2.5 before:h-2.5 before:rounded-full before:bg-grey-light">
                                Fr
                            </div>
                        </div>
                        <div className="w-1/6">
                            <div className="relative inline-flex justify-center items-center w-8 h-8 -ml-4 rounded-full text-center text-menu">
                                Sa
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative pt-6 pb-5">
                    <div className="absolute top-0 left-[8.6rem] right-0 bottom-0">
                        <div className="absolute top-0 bottom-0 w-0.25 bg-grey-light pointer-events-none left-[8.33%] dark:bg-grey-light/10"></div>
                        <div className="absolute top-0 bottom-0 w-0.25 bg-grey-light pointer-events-none left-[25%] dark:bg-grey-light/10"></div>
                        <div className="absolute top-0 bottom-0 w-0.25 bg-grey-light pointer-events-none left-[41.66%] dark:bg-grey-light/10"></div>
                        <div className="absolute top-0 bottom-0 w-0.25 bg-grey-light pointer-events-none left-[58.33%] dark:bg-grey-light/10"></div>
                        <div className="absolute top-0 bottom-0 w-0.25 bg-grey-light pointer-events-none left-[75%] dark:bg-grey-light/10"></div>
                    </div>
                    <div className="relative z-2 mb-4.5 flex items-center">
                        <div className="shrink-0 w-[8.6rem] pl-8 text-caption-1 text-grey">
                            8:00
                        </div>
                        <div className="flex grow">
                            <div
                                className="flex justify-end items-center h-8 px-0.5 rounded-lg bg-primary"
                                style={{ width: "34.5%" }}
                            >
                                <div className="px-5 bg-white/80 rounded-md text-[0.75rem] font-medium leading-[1.75rem] text-nowrap dark:bg-dark-2/80">
                                    Bento 3D Objects
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-2 mb-4.5 flex items-center">
                        <div className="shrink-0 w-[8.6rem] pl-8 text-caption-1 text-grey">
                            9:00
                        </div>
                        <div className="flex grow">
                            <div
                                className="flex justify-end items-center h-8 px-0.5 rounded-lg bg-[#FFA2C0]"
                                style={{ width: "50%", marginLeft: "16.66%" }}
                            >
                                <div className="px-4 bg-white/80 rounded-md text-[0.75rem] font-medium leading-[1.75rem] text-nowrap dark:bg-dark-2/80">
                                    Bento 3D Objects
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-2 mb-4.5 flex items-center">
                        <div className="shrink-0 w-[8.6rem] pl-8 text-caption-1 text-grey">
                            10:00
                        </div>
                        <div className="flex grow">
                            <div
                                className="flex justify-end items-center h-8 px-0.5 rounded-lg bg-[#A0D7E7]"
                                style={{ width: "83.3%" }}
                            >
                                <div className="px-4 bg-white/80 rounded-md text-[0.75rem] font-medium leading-[1.75rem] text-nowrap dark:bg-dark-2/80">
                                    Bento 3D Objects
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-2 mb-4.5 flex items-center">
                        <div className="shrink-0 w-[8.6rem] pl-8 text-caption-1 text-grey">
                            11:00
                        </div>
                        <div className="flex grow">
                            <div
                                className="flex justify-end items-center h-8 px-0.5 rounded-lg bg-[#CFC8FF]"
                                style={{
                                    width: "66.66%",
                                    marginLeft: "16.66%",
                                }}
                            >
                                <div className="px-4 bg-white/80 rounded-md text-[0.75rem] font-medium leading-[1.75rem] text-nowrap dark:bg-dark-2/80">
                                    Bento 3D Objects
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-2 flex items-center">
                        <div className="shrink-0 w-[8.6rem] pl-8 text-caption-1 text-grey">
                            12:00
                        </div>
                        <div className="flex grow">
                            <div
                                className="flex justify-end items-center h-8 px-0.5 rounded-lg bg-secondary"
                                style={{
                                    width: "33.33%",
                                    marginLeft: "33.33%",
                                }}
                            >
                                <div className="px-4 bg-white/80 rounded-md text-[0.75rem] font-medium leading-[1.75rem] text-nowrap dark:bg-dark-2/80">
                                    Bento 3D Objects
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap mt-8 md:justify-center md:mt-4 md:-mx-2">
            {legend.map((item, index) => (
                <div
                    className="flex items-center mr-auto text-caption-2 text-grey md:mt-2 md:mx-2"
                    key={index}
                >
                    <div
                        className="shrink-0 w-3 h-3 mr-2 rounded-full bg-green"
                        style={{ backgroundColor: item.color }}
                    ></div>
                    {item.title}
                </div>
            ))}
        </div>
    </div>
);

export default Timeline;
