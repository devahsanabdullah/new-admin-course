import { useState } from "react";
import Sorting from "@/components/Sorting";
import Checkbox from "@/components/Checkbox";

import { withdrawHistory } from "@/mocks/withdrawHistory";

type WithdrawHistoryProps = {};

const WithdrawHistory = ({}: WithdrawHistoryProps) => {
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [checkboxes, setCheckboxes] = useState(withdrawHistory);

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
        <div className="relative card-shadow p-8 rounded-3xl bg-white md:p-6 md:pt-8 dark:bg-dark-2">
            <div className="mb-8 text-h6">Withdraw History</div>
            <Sorting />
            <div className="table w-full mt-10 border-b border-grey-light md:-mt-8.5 md:block md:w-auto md:-mx-6 dark:border-grey-light/10">
                <div className="table-row text-caption-1 text-[#B2B3BD] md:flex md:pl-6">
                    <div className="table-cell align-middle pb-6">
                        <Checkbox
                            className="mb-5 last:mb-0"
                            value={selectAll}
                            onChange={() => handleSelectAll(!selectAll)}
                        />
                    </div>
                    <div className="table-cell align-middle pl-4 pb-6">
                        Transaction
                    </div>
                    <div className="table-cell align-middle pl-4 pb-6 md:hidden">
                        Payout Method
                    </div>
                    <div className="table-cell align-middle pl-4 pb-6 md:hidden">
                        Status
                    </div>
                    <div className="table-cell align-middle pl-4 pb-6 md:hidden">
                        Date Processed
                    </div>
                    <div className="table-cell align-middle pl-4 pb-6 md:hidden">
                        Fees
                    </div>
                </div>
                {withdrawHistory.map((item) => (
                    <div
                        className="table-row md:flex md:flex-wrap md:p-6 md:border-t md:border-grey-light dark:md:border-grey-light/10"
                        key={item.id}
                    >
                        <div className="table-cell align-middle py-8 border-t border-grey-light md:py-0 md:border-t-0 dark:border-grey-light/10">
                            <Checkbox
                                className="mb-5 last:mb-0"
                                value={item.isChecked}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                        </div>
                        <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light md:py-0 md:border-t-0 dark:border-grey-light/10">
                            <div className="mb-2 text-title">{item.price}</div>
                            <div className="text-caption-1 text-grey">
                                {item.details}
                            </div>
                        </div>
                        <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            {item.method}
                        </div>
                        <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light md:hidden dark:border-grey-light/10">
                            <div className="inline-block px-4 py-0.75 rounded bg-green text-caption-1 text-white">
                                {item.status}
                            </div>
                        </div>
                        <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light text-grey md:hidden dark:border-grey-light/10">
                            {item.date}
                        </div>
                        <div className="table-cell align-middle pl-4 py-8 border-t border-grey-light text-orange md:hidden dark:border-grey-light/10">
                            {item.fees}
                        </div>
                        <div className="hidden items-center w-full mt-6 p-1 pr-6 rounded-lg border border-grey-light md:flex dark:border-grey-light/10">
                            <div className="w-2 h-8 mr-6 rounded-full bg-green"></div>
                            <div className="w-[42%] text-grey">{item.date}</div>
                            <div className="mr-auto">{item.method}</div>
                            <div className="text-orange">{item.fees}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 text-center 2xl:mt-6">
                <button className="btn-black min-w-[10.5rem]">Load More</button>
            </div>
        </div>
    );
};

export default WithdrawHistory;
