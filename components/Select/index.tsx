import { Listbox, Transition } from "@headlessui/react";
import Icon from "@/components/Icon";

type ItemsType = {
    id: string;
    title: string;
};

type SelectProps = {
    className?: string;
    value: any;
    onChange: any;
    items: ItemsType[];
};

const Select = ({ className, value, onChange, items }: SelectProps) => (
    <Listbox
        className={`relative ${className || ""}`}
        value={value}
        onChange={onChange}
        as="div"
    >
        <Listbox.Button className="flex justify-between items-center w-full h-14 pl-5.5 pr-3 border border-transparent rounded-xl bg-grey-light/30 text-menu text-grey dark:bg-grey-light/[.03]">
            <div className="truncate">{value.title}</div>
            <Icon
                className="shrink-0 ml-4 transition-transform ui-open:rotate-180 dark:fill-white"
                name="arrow-down"
            />
        </Listbox.Button>
        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Listbox.Options className="absolute top-full left-0 right-0 mt-0.5 bg-[#F2F2F2] rounded-2xl border border-transparent overflow-hidden dark:bg-dark-2 dark:border-grey-light/10">
                {items.map((item) => (
                    <Listbox.Option
                        className="w-full px-5.5 py-3 text-menu text-black transition-colors cursor-pointer hover:bg-grey-light ui-selected:!bg-primary ui-selected:!text-white dark:text-grey dark:hover:bg-grey-light/[.03] dark:hover:text-white"
                        key={item.id}
                        value={item}
                    >
                        {item.title}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Transition>
    </Listbox>
);

export default Select;
