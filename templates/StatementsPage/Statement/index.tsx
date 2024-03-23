import { useState } from "react";
import Icon from "@/components/Icon";
import Checkbox from "@/components/Checkbox";

import { statement } from "@/mocks/statement";

const tabs = [
    {
        id: "0",
        title: "Last 30 Days",
    },
    {
        id: "1",
        title: "Aug 2020",
    },
    {
        id: "2",
        title: "Jul 2020",
    },
];

type StatementProps = {};

const Statement = ({}: StatementProps) => {
    const [activeId, setActiveId] = useState<string>("0");
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState(statement);

    const handleCheckboxChange = (checkboxId: string) => {
        const updatedCheckboxes = [...checkboxes];
        const checkboxIndex = updatedCheckboxes.findIndex(
            (checkbox) => checkbox.id === checkboxId
        );
        updatedCheckboxes[checkboxIndex].isChecked =
            !updatedCheckboxes[checkboxIndex].isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    const handleSelectAll = (value: boolean) => {
        setSelectAll(value);
        const updatedCheckboxes = [...checkboxes];
        for (let checkbox of checkboxes) {
            checkbox.isChecked = value;
        }
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div className="mt-17 2xl:mt-12">
            <div className="flex mb-10 2xl:mb-8 md:mb-6">
                {tabs.map((tab) => (
                    <button
                        className={`px-4.5 py-2 rounded-xl text-menu text-grey transition-colors hover:text-primary ${
                            activeId === tab.id ? "bg-primary !text-white" : ""
                        }`}
                        key={tab.id}
                        onClick={() => setActiveId(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="card-shadow p-8 bg-white md:p-6 md:pt-8 dark:bg-dark-2">
                <div className="flex items-center">
                    <div className="text-h6">Statement</div>
                    <div className="flex ml-auto space-x-6">
                        <button className="btn-circle">
                            <Icon className="dark:fill-white" name="print" />
                        </button>
                        <button className="btn-circle">
                            <Icon className="dark:fill-white" name="download" />
                        </button>
                    </div>
                </div>
                <div className="text-caption-1 text-grey">
                    Please note: Transactions are based Time in California, USA.
                </div>
                <div className="table w-full mt-10 border-b border-grey-light md:block md:w-auto md:-mx-6 dark:border-grey-light/10">
                    <div className="table-row text-caption-1 text-[#B2B3BD] md:flex md:items-center md:pl-6">
                        <div className="table-cell align-middle pb-6">
                            <Checkbox
                                className="mb-5 last:mb-0"
                                value={selectAll}
                                onChange={() => handleSelectAll(!selectAll)}
                            />
                        </div>
                        <div className="table-cell align-middle pl-4 pb-6">
                            <span className="md:hidden">Date</span>
                            <span className="hidden md:inline">
                                Transaction
                            </span>
                        </div>
                        <div className="table-cell align-middle pl-4 pb-6 md:hidden">
                            Order ID
                        </div>
                        <div className="table-cell align-middle pl-4 pb-6 md:hidden">
                            Amount
                        </div>
                        <div className="table-cell align-middle pl-4 pb-6 md:hidden">
                            Price
                        </div>
                        <div className="table-cell align-middle pl-4 pb-6 text-right md:hidden">
                            Type
                        </div>
                    </div>
                    {statement.map((item) => (
                        <div
                            className="table-row md:flex md:flex-wrap md:items-center md:p-6 md:border-t md:border-grey-light dark:border-grey-light/10"
                            key={item.id}
                        >
                            <div className="table-cell align-middle py-8 border-t border-grey-light md:py-0 md:border-t-0 dark:border-grey-light/10">
                                <Checkbox
                                    className="mb-5 last:mb-0"
                                    value={item.isChecked}
                                    onChange={() =>
                                        handleCheckboxChange(item.id)
                                    }
                                />
                            </div>
                            <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light text-grey md:hidden dark:border-grey-light/10">
                                {item.date}
                            </div>
                            <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light md:grow md:py-0 md:border-t-0 dark:border-grey-light/10">
                                <div className="hidden mb-0.5 text-caption-2 text-[#B2B3BD] md:block">
                                    Order ID
                                </div>
                                {item.id}
                            </div>
                            <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                                {item.amount}
                            </div>
                            <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light text-orange md:hidden dark:border-grey-light/10">
                                {item.price}
                            </div>
                            <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light text-right md:py-0 md:border-t-0 dark:border-grey-light/10">
                                <div className="inline-block px-4 py-0.75 rounded bg-green text-caption-1 text-white">
                                    {item.type}
                                </div>
                            </div>
                            <div className="hidden items-center w-full mt-6 p-1 pr-6 rounded-lg border border-grey-light md:flex dark:border-grey-light/10">
                                <div className="w-2 h-8 mr-6 rounded-full bg-green"></div>
                                <div className="w-[40%] text-grey">
                                    {item.date}
                                </div>
                                <div className="mr-auto">{item.amount}</div>
                                <div className="text-orange">{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center 2xl:mt-6">
                    <button className="btn-black min-w-[10.5rem]">
                        Load More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Statement;
