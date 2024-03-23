import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

type ItemsType = {
    title: string;
    icon: string;
    url?: string;
    onClick?: any;
    counter?: number;
};

type MenuProps = {
    className?: string;
    title: any;
    items: ItemsType[];
    visible?: boolean;
};

const Menu = ({ className, title, items, visible }: MenuProps) => {
    const pathname = usePathname();

    return (
        <div className={className}>
            <div
                className={`mb-4 px-5 text-nowrap text-caption-2 text-grey ${
                    visible ? "xl:px-0 xl:text-center lg:px-5 lg:text-left" : ""
                }`}
            >
                {title}
            </div>
            <div className="">
                {items.map((item, index) =>
                    item.url ? (
                        <Link
                            className={`relative group flex items-center h-14 px-5 rounded-xl text-menu text-nowrap text-grey transition-colors hover:text-primary dark:text-grey dark:hover:text-white ${
                                pathname === item.url
                                    ? "bg-primary !text-white"
                                    : ""
                            } ${
                                visible
                                    ? "xl:justify-center xl:text-0 lg:justify-stretch lg:text-[0.875rem]"
                                    : ""
                            }`}
                            href={item.url}
                            key={index}
                        >
                            <Icon
                                className={`shrink-0 mr-4 fill-black/40 transition-colors group-hover:fill-primary dark:fill-grey dark:group-hover:fill-white ${
                                    pathname === item.url ? "!fill-white" : ""
                                } ${visible ? "xl:mr-0 lg:mr-4" : ""}`}
                                name={item.icon}
                            />
                            {item.title}
                            {item.counter && (
                                <div
                                    className={`flex justify-center items-center shrink-0 w-6 h-6 ml-auto rounded-full bg-orange text-white text-[0.75rem] ${
                                        visible
                                            ? "xl:absolute xl:top-[0.9375rem] xl:right-[0.9375rem] xl:w-2.5 xl:h-2.5 xl:ml-0 xl:text-0 lg:static lg:w-6 lg:h-6 lg:ml-auto lg:text-[0.75rem]"
                                            : ""
                                    }`}
                                >
                                    {item.counter}
                                </div>
                            )}
                        </Link>
                    ) : (
                        <button
                            className={`group flex items-center w-full h-14 px-5 rounded-xl text-menu text-nowrap text-grey transition-colors hover:text-primary dark:text-grey dark:hover:text-white ${
                                visible
                                    ? "xl:justify-center xl:text-0 lg:justify-stretch lg:text-[0.875rem]"
                                    : ""
                            }`}
                            key={index}
                            onClick={item.onClick}
                        >
                            <Icon
                                className={`shrink-0 mr-4 fill-black/40 transition-colors group-hover:fill-primary dark:fill-grey dark:group-hover:fill-white ${
                                    visible ? "xl:mr-0 lg:mr-4" : ""
                                }`}
                                name={item.icon}
                            />
                            {item.title}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default Menu;
