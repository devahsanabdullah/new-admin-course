import { useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import ToggleTheme from "@/components/ToggleTheme";
import Modal from "@/components/Modal";
import SearchForm from "@/components/SearchForm";
import Menu from "./Menu";
import Profile from "./Profile";
import Banner from "./Banner";
import Settings from "./Settings";
import Logout from "./Logout/Logout";

type SidebarProps = {
    className?: string;
    hideBanner?: boolean;
    visible: boolean;
    onClick: () => void;
};

const Sidebar = ({ className, hideBanner, visible, onClick }: SidebarProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [open, setOpen] = useState(false)
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    const menuAdmin = [
        {
            title: "Overview",
            icon: "overview",
            url: "/dashboard",
        },
        {
            title: "Users",
            icon: "profile",
            url: "/users",
        },
        {
            title: "Courses",
            icon: "document",
            url: "/courses",
        },
        // {
        //     title: "Campaigns",
        //     icon: "chart",
        //     url: "/campaigns",
        // },
        // {
        //     title: "Schedules",
        //     icon: "compass",
        //     url: "/schedules",
        // },
        // {
        //     title: "Payouts",
        //     icon: "wallet",
        //     url: "/payouts",
        // },
        // {
        //     title: "Statements",
        //     icon: "document",
        //     url: "/statements",
        // },
        {
            title: "Settings",
            icon: "settings",
            onClick: () => setVisibleModal(true),
        },
    ];

    const insights = [
        // {
        //     title: "Inbox",
        //     icon: "mail",
        //     url: "/inbox",
        //     counter: 18,
        // },
        // {
        //     title: "Notifications",
        //     icon: "bell",
        //     url: "/notifications",
        //     counter: 2,
        // },
        // {
        //     title: "Comments",
        //     icon: "chat",
        //     url: "/comments",
        //     counter: 20,
        // },
    ];

    return (
        <>
            <div
                className={`fixed top-0 left-0 bottom-0 flex w-64 pt-[8.75rem] pb-18 border-r border-grey-light bg-white xl:transition-all xl:pt-24 dark:bg-dark-2 dark:border-grey-light/10 ${
                    visible ? "xl:w-24 xl:!pt-24 lg:w-64" : ""
                } ${className || ""}`}
            >
                <div
                    className={`absolute top-0 left-0 right-0 flex justify-center items-center h-[8.75rem] xl:h-24 xl:justify-stretch xl:pl-10 xl:border-b xl:border-transparent lg:border-grey-light dark:lg:border-grey-light/10 ${
                        visible
                            ? "xl:!border-grey-light dark:xl:!border-grey-light/10"
                            : ""
                    }`}
                >
                    <Link
                        className={`w-44 xl:w-36 xl:transition-opacity lg:w-44 lg:pt-2 ${
                            visible ? "xl:opacity-0 lg:opacity-100" : ""
                        }`}
                        href="/"
                    >
                        <Image
                            className="w-full opacity-100"
                            src={"/images/logo.png"}
                            width={176}
                            height={47}
                            alt=""
                        />
                    </Link>
                    <button
                        className="absolute top-0 right-0 z-2 hidden flex-col justify-center items-center w-24 h-24 transition-colors before:w-8 before:h-0.5 before:mb-1.5 before:bg-black before:rounded-full after:w-8 after:h-0.5 after:bg-black after:rounded-full xl:flex lg:hidden dark:before:bg-white dark:after:bg-white"
                        onClick={onClick}
                    ></button>
                </div>
                <div className="flex flex-col grow px-5 pb-4 overflow-auto scrollbar-none scroll-smoot lg:pt-6">
                    <Link
                        className={`hidden justify-center items-center w-24 h-20 shrink-0 -mx-5 ${
                            visible ? "xl:flex lg:hidden" : ""
                        }`}
                        href="/"
                    >
                        <Image
                            className="w-full opacity-100"
                            src="/images/logo-sm.png"
                            width={96}
                            height={48}
                            alt=""
                        />
                    </Link>
                    <SearchForm className="hidden mb-6 grow-0 md:block" />
                    <Menu
                        className="mb-8"
                        title={
                          ''
                        }
                        items={menuAdmin}
                        visible={visible}
                    />
                    <div
                        className={`shrink-0 mx-5 mb-10 h-0.25 bg-[#F0F3F6] dark:bg-grey-light/10 ${
                            visible ? "xl:-mx-5 lg:mx-5" : ""
                        }`}
                    ></div>
                    {/* <Menu
                        className="mb-auto"
                        title="Insights"
                        items={insights}
                        visible={visible}
                    /> */}
                    {/* {!hideBanner && !visible && <Banner />}
                    <Profile visible={visible} /> */}
                </div>
                <div
                    className={`absolute left-0 right-0 bottom-0 flex items-center h-18 px-10 border-t border-black/5 dark:border-[#000]/10 ${
                        visible ? "xl:justify-center lg:justify-stretch" : ""
                    }`}
                >
                    <ToggleTheme visible={visible} />
                    <button
                    onClick={()=>setOpen(true)}
                        className={`ml-auto transition-opacity hover:opacity-80 ${
                            visible ? "xl:hidden lg:inline-block" : ""
                        }`}
                    >
                        <Icon className="fill-red-500" name="logout" />
                    </button>
                </div>
            </div>
            <Modal
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <Settings setVisibleModal={setVisibleModal}/>
            </Modal>
            <Modal
                visible={open}
                onClose={() => setOpen(false)}
            >
            <Logout setOpen={setOpen} open={open}/>
            </Modal>
        </>
    );
};

export default Sidebar;
