type TabType = {
    title: string;
    active: boolean;
    onClick?: () => void;
};

type TabsProps = {
    className?: string;
    items: TabType[];
};

const Tabs = ({ className, items }: TabsProps) => {
    return (
        <div
            className={`flex flex-wrap -mt-2 -ml-4 md:flex-nowrap md:mt-0 md:-mx-4 md:overflow-auto md:scrollbar-none md:before:shrink-0 md:before:w-4 md:after:shrink-0 md:after:w-4 ${
                className || ""
            }`}
        >
            {items.map((item, index) => (
                <button
                    className={`shrink-0 mt-2 ml-4 px-4 py-1.5 border-2 border-orange rounded-xl text-menu text-black transition-colors hover:border-primary md:mt-0 md:ml-3 md:first:ml-0 dark:text-white ${
                        item.active
                            ? "bg-primary border-primary !text-white"
                            : ""
                    }`}
                    onClick={item.onClick}
                    key={index}
                    type="button"
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
