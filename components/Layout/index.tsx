import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
    disablePageScroll,
    enablePageScroll,
    clearQueueScrollLocks,
} from "scroll-lock";
import Sidebar from "@/components/Sidebar";
import Head from "@/components/Head";

type LayoutProps = {
    classCenter?: string;
    title: string;
    info?: string;
    children: React.ReactNode;
    hideBannerSidebar?: boolean;
    noLineHead?: boolean;
    equalColumnsHead?: boolean;
};

const Layout = ({
    classCenter,
    title,
    info,
    children,
    hideBannerSidebar,
    noLineHead,
    equalColumnsHead,
}: LayoutProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    const pathname = usePathname();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    const toggleMenu = () => {
        setShow(!show);
        if (show) {
            enablePageScroll();
        } else {
            disablePageScroll();
        }
    };

    return (
        <div className="lg:overflow-hidden">
            <Sidebar
                className={`${
                    show ? "lg:translate-x-0" : "lg:-translate-x-64"
                }`}
                visible={visible}
                onClick={() => setVisible(!visible)}
                hideBanner={hideBannerSidebar}
            />
            <div
                className={`pl-64 transition-all lg:pl-0 ${
                    visible ? "xl:pl-24 lg:pl-0" : ""
                } ${show ? "lg:-mr-64 lg:!pl-64" : ""}`}
            >
                <div
                    className={`flex flex-col max-w-[75rem] min-h-screen mx-auto 2xl:max-w-[58rem] 2xl:pt-10 2xl:px-18 2xl:pb-12 lg:px-12 lg:pt-6 md:pt-0 md:px-4 md:pb-10 ${
                        classCenter || ""
                    }`}
                >
                    <Head
                        title={title}
                        info={info}
                        noLine={noLineHead}
                        equalColumns={equalColumnsHead}
                        onClick={toggleMenu}
                        visible={show}
                    />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
