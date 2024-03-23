import { Menu, Transition } from "@headlessui/react";
import Icon from "@/components/Icon";

type ItemsType = {
    id: string;
    title: string;
    details: string;
};

type DropdownProps = {
    className?: string;
    title: string;
    items: ItemsType[];
};

const Dropdown = ({ className, title, items }: DropdownProps) => (
    <Menu className={`${className || ""}`} as="div">
        <Menu.Button className="flex justify-between items-center w-full h-14 pl-5.5 pr-4 border-2 border-transparent bg-grey-light/30 rounded-2xl text-menu text-grey transition-colors hover:border-link hover:bg-white ui-open:border-link ui-open:text-black ui-open:bg-white dark:bg-grey-light/[.03] dark:ui-open:bg-dark-2 dark:ui-open:text-white dark:hover:bg-dark-2">
            {title}{" "}
            <Icon
                className="transition-transform ui-open:rotate-180 dark:fill-white"
                name="arrow-down"
            />
        </Menu.Button>
        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <div className="absolute top-full left-0 w-[19.4rem] mt-2 p-8 border border-grey-light bg-white rounded-3xl space-y-6 before:absolute before:-z-1 before:top-6 before:left-3 before:right-3 before:-bottom-2 before:bg-[#E3E6EC] before:rounded-3xl before:blur-[1rem] md:right-0 md:w-auto md:p-6 dark:border-grey-light/10 dark:bg-dark-2 dark:before:bg-dark-3">
                {items.map((item) => (
                    <button
                        className="group flex w-full text-left transition-colors hover:text-primary"
                        key={item.id}
                    >
                        <div className="grow">
                            <div className="mb-1 text-title">{item.title}</div>
                            <div className="text-caption-1 text-grey">
                                {item.details}
                            </div>
                        </div>
                        <Icon
                            className="-mt-0.5 transition-transform group-hover:translate-x-1 dark:fill-white"
                            name="arrow-right"
                        />
                    </button>
                ))}
            </div>
        </Transition>
    </Menu>
);

export default Dropdown;
