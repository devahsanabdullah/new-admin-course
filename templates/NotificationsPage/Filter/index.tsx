import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Checkbox from "@/components/Checkbox";

const categories = ["Followers", "Everyone"];

type FilterProps = {};

const Filter = ({}: FilterProps) => {
    const [category, setCategory] = useState(categories[0]);
    const [checkboxes, setCheckboxes] = useState([
        {
            id: "0",
            title: "Likes",
            isChecked: false,
        },
        {
            id: "1",
            title: "Comments",
            isChecked: true,
        },
        {
            id: "2",
            title: "Mention",
            isChecked: false,
        },
        {
            id: "3",
            title: "Followers",
            isChecked: true,
        },
        {
            id: "4",
            title: "Mention",
            isChecked: false,
        },
        {
            id: "5",
            title: "Other",
            isChecked: false,
        },
    ]);

    const handleCheckboxChange = (checkboxId: string) => {
        const updatedCheckboxes = [...checkboxes];
        const checkboxIndex = updatedCheckboxes.findIndex(
            (checkbox) => checkbox.id === checkboxId
        );
        updatedCheckboxes[checkboxIndex].isChecked =
            !updatedCheckboxes[checkboxIndex].isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    const handleUnselectAll = () => {
        const updatedCheckboxes = [...checkboxes];
        for (let checkbox of checkboxes) {
            checkbox.isChecked = false;
        }
        setCheckboxes(updatedCheckboxes);
    };

    const handleSelectAll = () => {
        const updatedCheckboxes = [...checkboxes];
        for (let checkbox of checkboxes) {
            checkbox.isChecked = true;
        }
        setCheckboxes(updatedCheckboxes);
    };

    const handleResetAll = () => {
        const updatedCheckboxes = [...checkboxes];
        for (let checkbox of checkboxes) {
            checkbox.isChecked = false;
        }
        setCheckboxes(updatedCheckboxes);

        setCategory("Followers");
    };

    return (
        <div className="p-8 bg-white card-shadow 2xl:px-6 md:px-8 dark:bg-dark-2">
            <div className="mb-8 text-h6">Filter</div>
            <div className="space-y-5">
                {checkboxes.map((checkbox) => (
                    <Checkbox
                        label={checkbox.title}
                        value={checkbox.isChecked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                        key={checkbox.id}
                    />
                ))}
            </div>
            <div className="flex mt-8 space-x-2.5 2xl:space-x-1.5">
                <button
                    className="btn-primary flex-1 h-11 px-1"
                    onClick={handleUnselectAll}
                >
                    Unselect all
                </button>
                <button
                    className="btn-white flex-1 h-11 px-1"
                    onClick={handleSelectAll}
                >
                    Select All
                </button>
            </div>
            <div className="mt-8 pt-8 border-t border-grey-light dark:border-grey-light/10">
                <div className="mb-6 text-h6">From</div>
                <RadioGroup
                    className="flex mb-8 space-x-6"
                    value={category}
                    onChange={setCategory}
                >
                    {categories.map((plan) => (
                        <RadioGroup.Option
                            className="group flex items-center text-[0.8125rem] text-grey cursor-pointer transition-colors ui-checked:text-black dark:ui-checked:text-white"
                            key={plan}
                            value={plan}
                        >
                            <div className="relative shrink-0 w-5 h-5 mr-2 bg-grey-light rounded-full transition-colors before:absolute before:inset-[0.3125rem] before:bg-white before:shadow-[0_0.125rem_0.25rem_0_rgba(0,0,0,0.50)] before:rounded-full before:opacity-0 before:transition-opacity ui-checked:bg-primary ui-checked:before:opacity-100 group-hover:bg-primary dark:bg-grey-light/10 dark:ui-checked:bg-primary"></div>
                            {plan}
                        </RadioGroup.Option>
                    ))}
                </RadioGroup>
                <button
                    className="text-menu text-grey transition-colors hover:text-primary"
                    onClick={handleResetAll}
                >
                    Reset all filters
                </button>
            </div>
        </div>
    );
};

export default Filter;
