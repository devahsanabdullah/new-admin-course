import Icon from "@/components/Icon";
import Image from "@/components/Image";

import { lastSales } from "@/mocks/sales";

type SalesProps = {};

const Sales = ({}: SalesProps) => (
    <div className="w-[calc(50%-2rem)] card-shadow mx-4 p-8 bg-white md:w-full md:mx-0 md:mt-8 dark:bg-dark-2">
        <div className="flex justify-between items-center mb-2">
            <div className="text-h6">Latest Sales</div>
            <button className="group">
                <Icon
                    className="transition-colors group-hover:fill-primary dark:fill-white"
                    name="arrow-next"
                />
            </button>
        </div>
        <div className="">
            {lastSales.map((item) => (
                <div className="flex items-center py-6" key={item.id}>
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
                    <div className="grow">
                        <div className="flex justify-between mb-1 text-title">
                            <div className="">{item.title}</div>
                            <div className="shrink-0 ml-2 text-green">
                                {item.value}
                            </div>
                        </div>
                        <div className="text-caption-2 text-grey">
                            {item.details}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button className="btn-primary w-full mt-4">Show all report</button>
    </div>
);

export default Sales;
