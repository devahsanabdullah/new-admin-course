import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import SearchForm from "@/components/SearchForm";

import { projects } from "@/mocks/projects";

type SortingProps = {};

const Sorting = ({}: SortingProps) => (
    <div className="flex items-center 2xl:flex-wrap">
        <div className="relative z-2 flex mr-4 space-x-4 2xl:w-full 2xl:mr-0 2xl:mb-4 md:block md:space-x-0 md:space-y-4">
            <Dropdown
                className="w-[14.7rem] 3xl:w-[12.5rem] 2xl:flex-1 2xl:w-auto"
                title="Last 30 days"
                items={projects}
            />
            <Dropdown
                className="w-[14.7rem] 3xl:w-[12.5rem] 2xl:flex-1 2xl:w-auto"
                title="Aug 2020"
                items={projects}
            />
        </div>
        <SearchForm
            className="2xl:max-w-[30rem] 2xl:mr-auto md:max-w-full md:w-full"
            advanceSearch
        />
        <div className="flex ml-12 space-x-6 xl:ml-8 md:mt-5 md:ml-auto">
            <button className="btn-circle">
                <Icon className="dark:fill-white" name="edit" />
            </button>
            <button className="btn-circle">
                <Icon className="dark:fill-white" name="trash" />
            </button>
        </div>
    </div>
);

export default Sorting;
