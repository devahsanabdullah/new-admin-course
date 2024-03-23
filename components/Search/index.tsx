import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

import { resultSearch } from "@/mocks/resultSearch";

type SearchProps = {
    className?: string;
};

const Search = ({ className }: SearchProps) => {
    const [search, setSearch] = useState<string>("");

    return (
        <OutsideClickHandler onOutsideClick={() => setSearch("")}>
            <div className={`relative ${className || ""}`}>
                <form
                    className="relative z-2"
                    action=""
                    onSubmit={() => console.log("Submit")}
                >
                    <button
                        className="group absolute top-0 left-0 bottom-0 w-11 pr-2"
                        type="button"
                        onClick={() => setSearch("")}
                    >
                        <Icon
                            className={`dark:fill-white ${
                                search !== ""
                                    ? "transition-colors group-hover:fill-primary"
                                    : ""
                            }`}
                            name={search !== "" ? "close" : "search"}
                        />
                    </button>
                    <input
                        className={`w-full h-12 pl-11 pr-2 rounded-xl bg-transparent outline-none text-black text-menu transition-colors placeholder:text-grey dark:text-white ${
                            search !== ""
                                ? "!bg-grey-light/30 dark:!bg-white/5"
                                : ""
                        }`}
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </form>
                <div
                    className={`absolute -top-1 -left-1 -right-1 pt-17 px-4 pb-6 rounded-xl shadow-[0_0.625rem_2rem_rgba(227,230,236,0.5)] bg-white transition-all dark:bg-dark-2 dark:shadow-[0_0.625rem_2rem_rgba(0,0,0,0.2)] ${
                        search !== ""
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                    }`}
                >
                    <div className="text-caption-2 text-grey">
                        Recent Searches
                    </div>
                    <div className="">
                        {resultSearch.map((item) => (
                            <div
                                className="group flex items-center py-4 border-b border-grey-light cursor-pointer transition-colors hover:text-primary last:border-0 dark:border-grey-light/10"
                                key={item.id}
                            >
                                <div
                                    className="shrink-0 w-10 h-10 rounded-xl"
                                    style={{ backgroundColor: item.color }}
                                >
                                    <Image
                                        src={item.image}
                                        width={40}
                                        height={40}
                                        alt=""
                                    />
                                </div>
                                <div className="grow pl-4 text-menu line-clamp-2">
                                    {item.title}
                                </div>
                                <Icon
                                    className="shrink-0 self-start ml-4 transition-all group-hover:translate-x-0.5 group-hover:fill-primary dark:fill-white"
                                    name="arrow-right"
                                />
                            </div>
                        ))}
                    </div>
                    <button className="btn-primary w-full h-10 outline-none">
                        Advance Search
                    </button>
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default Search;
