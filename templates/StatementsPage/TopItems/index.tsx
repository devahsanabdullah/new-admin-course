import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { topItems } from "@/mocks/topItems";

type TopItemsProps = {};

const TopItems = ({}: TopItemsProps) => (
    <div className="relative p-8 bg-white rounded-3xl before:absolute before:-z-1 before:inset-0 before:-bottom-2 before:bg-white/50 before:rounded-3xl after:absolute after:-z-2 after:top-4 after:left-0 after:right-0 after:-bottom-4 after:rounded-3xl after:bg-[#E3E6EC]/90 after:blur-[2.75rem] 2xl:w-[calc(50%-2rem)] 2xl:mx-4 md:w-full md:mx-0 dark:bg-dark-2 dark:before:bg-dark-2/50 dark:after:bg-dark-3/50">
        <div className="mb-6 text-h6">Your Top Items</div>
        <div className="-mx-4 space-y-5.5">
            {topItems.map((item) => (
                <button
                    className="group relative flex items-center w-full px-4 py-2 rounded-xl text-left transition-colors after:absolute after:top-full after:left-2 after:right-2 after:h-2 after:bg-[#CFC8FF] after:opacity-0 after:rounded-b-xl after:transition-opacity hover:bg-primary hover:text-white hover:after:opacity-100"
                    key={item.id}
                >
                    <div
                        className="relative shrink-0 w-22 h-20 rounded-xl"
                        style={{ backgroundColor: item.color }}
                    >
                        <Image
                            className="w-full h-full object-cover"
                            src={item.image}
                            width={88}
                            height={80}
                            alt=""
                        />
                        <div
                            className="absolute top-full left-2 right-2 h-2 rounded-b-xl opacity-50 transition-opacity group-hover:opacity-0"
                            style={{ backgroundColor: item.color }}
                        ></div>
                    </div>
                    <div className="grow pl-4">
                        <div className="flex justify-between items-center mb-1">
                            <div className="text-title">{item.title}</div>
                            <Icon
                                className="shrink-0 ml-4 transition-colors group-hover:fill-white dark:fill-white"
                                name="arrow-right"
                            />
                        </div>
                        <div className="mb-2 text-caption-2 text-grey transition-colors group-hover:text-white">
                            {item.details}
                        </div>
                        <div className="inline-flex items-center h-6 px-2.5 rounded-lg bg-primary text-caption-1 text-white transition-colors group-hover:bg-[#FFEBF6] group-hover:text-primary">
                            {item.price}
                        </div>
                    </div>
                </button>
            ))}
        </div>
        <button className="btn-black w-full mt-8">Add more</button>
    </div>
);

export default TopItems;
