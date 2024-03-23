import { CircularProgressbar } from "react-circular-progressbar";
import { useColorMode } from "@chakra-ui/react";
import "react-circular-progressbar/dist/styles.css";
import Image from "@/components/Image";

type ItemsType = {
    id: string;
    title: string;
    details: string;
    image: string;
    colorImage: string;
    progress: number;
    colorChart: string;
};

type IconProgressProps = {
    className?: string;
    items: ItemsType[];
};

const IconProgress = ({ className, items }: IconProgressProps) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    return (
        <div
            className={`card-shadow p-8 bg-white dark:bg-dark-2 ${
                className || ""
            }`}
        >
            <div className="mb-2 text-h6">Icon Progress</div>
            <div className="-mx-8">
                {items.map((item) => (
                    <div
                        className="flex items-center h-24 pl-8 py-2 pr-6"
                        key={item.id}
                    >
                        <div
                            className="flex justify-center items-center w-12 h-12 mr-3 rounded-xl"
                            style={{ backgroundColor: item.colorImage }}
                        >
                            <Image
                                className="w-full"
                                src={item.image}
                                width={48}
                                height={48}
                                alt=""
                            />
                        </div>
                        <div className="grow pr-2">
                            <div className="mb-1 text-title">{item.title}</div>
                            <div className="text-caption-2 text-grey">
                                {item.details}
                            </div>
                        </div>
                        <div className="w-16 h-16">
                            <CircularProgressbar
                                value={item.progress}
                                text={`${item.progress}%`}
                                strokeWidth={10}
                                styles={{
                                    path: {
                                        stroke: `${item.colorChart}`,
                                    },
                                    trail: {
                                        stroke: isDarkMode
                                            ? "#2E303A"
                                            : "#F1F1F1",
                                    },
                                    text: {
                                        fill: isDarkMode ? "#fff" : "#11142D",
                                        fontSize: "1.25rem",
                                        fontWeight: 500,
                                    },
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn-black w-full mt-4">Discover More</button>
        </div>
    );
};

export default IconProgress;
