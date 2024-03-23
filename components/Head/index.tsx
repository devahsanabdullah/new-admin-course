import Search from "@/components/Search";
import Notifications from "@/components/Notifications";
import Image from "@/components/Image";

type HeadProps = {
    title: string;
    info?: string;
    noLine?: boolean;
    equalColumns?: boolean;
    visible: boolean;
    onClick: () => void;
};

const Head = ({
    title,
    info,
    noLine,
    equalColumns,
    visible,
    onClick,
}: HeadProps) => (
    <div
        className={`relative z-10 flex 2xl:justify-between 2xl:mb-10 lg:flex-col-reverse md:-mx-4 md:mb-8 ${
            equalColumns ? "2xl:!mb-0 lg:!mb-10 md:!mb-8" : ""
        }`}
    >
        <div
            className={`pt-12 ${
                equalColumns
                    ? "w-1/2 px-16 3xl:px-12 xl:px-10 lg:w-auto lg:p-0 md:pt-4 md:px-8"
                    : "container 2xl:w-auto 2xl:grow 2xl:mr-8 lg:mr-0 2xl:pt-0 md:pt-4 md:px-8"
            }`}
        >
            <div className="text-h5 md:text-[1rem]">
                {info }
            </div>
            <div className="text-h2 2xl:text-h3 md:-mt-1 md:text-h4">
                {title}
            </div>
        </div>
        <div
            className={`pt-12 ${
                noLine
                    ? `${
                          equalColumns
                              ? "w-1/2 px-16 3xl:px-12 xl:px-10 lg:w-auto lg:mb-10 lg:p-0 md:mb-0 md:shadow-[inset_0_-0.0625rem_0_0_#E4E4E4] md:px-8 dark:md:shadow-[inset_0_-0.0625rem_0_0_rgba(228,228,228,.1)]"
                              : "sidebar 2xl:w-72 2xl:pt-0 xl:w-60 lg:w-auto lg:mb-10 md:mb-0 md:shadow-[inset_0_-0.0625rem_0_0_#E4E4E4] md:px-8 dark:md:shadow-[inset_0_-0.0625rem_0_0_rgba(228,228,228,.1)]"
                      }`
                    : `${
                          equalColumns
                              ? "w-1/2 px-16 border-l border-grey-light 3xl:px-12 xl:px-10 lg:w-auto lg:mb-10 lg:p-0 lg:border-l-0 md:mb-0 md:shadow-[inset_0_-0.0625rem_0_0_#E4E4E4] md:px-8 dark:border-grey-light/10 dark:md:shadow-[inset_0_-0.0625rem_0_0_rgba(228,228,228,.1)]"
                              : "sidebar-border 2xl:w-72 2xl:pt-0 xl:w-60 lg:w-auto lg:mb-10 md:mb-0 md:shadow-[inset_0_-0.0625rem_0_0_#E4E4E4] md:px-8 dark:md:shadow-[inset_0_-0.0625rem_0_0_rgba(228,228,228,.1)]"
                      }`
            }`}
        >
            <div
                className={`flex justify-between items-center 2xl:-mt-2.5 lg:mt-0 md:h-24 ${
                    equalColumns
                        ? "max-w-[18.56rem] ml-auto md:ml-0 lg:max-w-full"
                        : ""
                }`}
            >
                <button
                    className={`z-2 hidden flex-col justify-center items-center w-8 h-8 mr-auto transition-colors before:w-8 before:h-0.5 before:mb-1.5 before:bg-black before:rounded-full after:w-8 after:h-0.5 after:bg-black after:rounded-full before:transition-transform after:transition-transform lg:flex dark:before:bg-white dark:after:bg-white ${
                        visible
                            ? "before:rotate-45 before:translate-y-1 after:-rotate-45 after:-translate-y-1"
                            : ""
                    }`}
                    onClick={onClick}
                ></button>
                {/* <Search className="max-w-[13.375rem] -ml-2 md:hidden" /> */}
                {/* <Notifications className="shrink-0 ml-4 md:ml-auto" /> */}
                <button className="hidden ml-10 md:block">
                    <Image
                        className="w-10 h-10 rounded-full opacity-100"
                        src="/images/avatar.png"
                        width={40}
                        height={40}
                        alt=""
                    />
                </button>
            </div>
        </div>
    </div>
);

export default Head;
