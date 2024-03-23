import { useState } from "react";
import Icon from "@/components/Icon";

type SearchFormProps = {
    className?: string;
    advanceSearch?: boolean;
};

const SearchForm = ({ className, advanceSearch }: SearchFormProps) => {
    const [search, setSearch] = useState<string>("");

    return (
        <form
            className={`relative grow ${className || ""}`}
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <button className="group absolute top-0 left-0 bottom-0 w-14">
                <Icon
                    className="transition-colors group-hover:fill-primary dark:fill-white"
                    name="search"
                />
            </button>
            <input
                className={`w-full h-14 bg-grey-light/20 px-14 pr-4 rounded-2xl outline-none text-menu text-black transition-colors placeholder:text-grey dark:bg-grey-light/[.03] dark:text-white ${
                    advanceSearch ? "pr-40" : ""
                }`}
                type="text"
                name="search"
                placeholder="Search"
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
                autoComplete="off"
                required
            />
            {advanceSearch && (
                <button
                    className="btn-secondary absolute top-1 right-1 h-12"
                    type="button"
                >
                    Advance Search
                </button>
            )}
        </form>
    );
};

export default SearchForm;
