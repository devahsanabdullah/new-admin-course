import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { earningItems } from "@/mocks/earning";

type EarningItemsProps = {course:any};

const EarningItems = ({course}: EarningItemsProps) => (
    <div className="w-[calc(50%-2rem)] mx-4 p-8 bg-white card-shadow md:w-full md:mx-0 md:mb-8 dark:bg-dark-2">
        <div className="mb-5 text-h6">Most Enroll Course</div>
        <div className="-mx-3 space-y-4">
            {course?.map((item:any) => (
                <Link
                    className="group flex items-center p-3 rounded-2xl transition-colors hover:bg-primary hover:text-white"
                    key={item.id}
                    href="/"
                >
                    <div
                        className="shrink-0 w-14 rounded-2xl"
                        style={{ backgroundColor: item.color }}
                    >
                        <Image
                            className="w-full"
                            src={item.courseImage}
                            width={56}
                            height={56}
                            alt=""
                        />
                    </div>
                    <div className="grow pl-6">
                        <div className="mb-1 text-title">{item.courseName}</div>
                        <div className="text-caption-1 text-grey transition-colors group-hover:text-white">
                            {item.category}
                        </div>
                    </div>
                    <Icon
                        className="shrink-0 ml-2 mt-1.5 self-start transition-colors group-hover:fill-white dark:fill-white"
                        name="arrow-right"
                    />
                </Link>
            ))}
        </div>
    </div>
);

export default EarningItems;
