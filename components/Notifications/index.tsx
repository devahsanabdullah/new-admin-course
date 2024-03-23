import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

import { notifications } from "@/mocks/notifications";

type NotificationsProps = {
    className?: string;
};

const Notifications = ({ className }: NotificationsProps) => (
    <Menu className={`${className || ""}`} as="div">
        <Menu.Button className="relative w-12 h-12 rounded-full text-0 transition-all hover:shadow-[0_0.3125rem_0.625rem_rgba(227,230,236,0.6)] ui-open:bg-primary ui-open:shadow-[0_0.3125rem_0.625rem_rgba(227,230,236,0.6)] md:w-10 md:h-10 dark:hover:shadow-[0_0.3125rem_0.625rem_rgba(0,0,0,0.2)] dark:ui-open:shadow-[0_0.3125rem_0.625rem_rgba(0,0,0,0.3)]">
            <Icon
                className="fill-black transition-colors ui-open:fill-white dark:fill-white"
                name="notification"
            />
            <div className="absolute top-0 -right-3 flex justify-center items-center w-6 h-6 bg-orange rounded-full text-caption-2 font-semibold text-white md:top-1.5 md:right-2 md:w-2.5 md:h-2.5 md:text-0">
                2
            </div>
        </Menu.Button>
        <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <div className="absolute top-full -right-3 w-[22.5rem] mt-6 p-8 rounded-3xl bg-white shadow-[0_0.625rem_2.25rem_rgba(227,230,236,0.6)] md:-right-24 md:w-80 md:p-6 md:shadow-2xl dark:bg-dark-2 dark:shadow-[0_0.625rem_2.25rem_rgba(0,0,0,0.6)]">
                <div className="mb-8 text-h6 md:mb-4">Recent Notification</div>
                <div className="-mx-6 md:-mx-3">
                    {notifications.map((item) => (
                        <button
                            className="group flex items-center w-full px-5 py-4 rounded-xl text-left transition-colors hover:bg-primary hover:text-white md:px-3 md:py-2.5"
                            key={item.id}
                        >
                            <div className="relative shrink-0">
                                <Image
                                    className="w-12 h-12 rounded-full"
                                    src={item.avatar}
                                    width={48}
                                    height={48}
                                    alt=""
                                />
                                <div
                                    className="absolute top-0 right-0 flex justify-center items-center w-5 h-5 rounded-full border-2 border-white"
                                    style={{ backgroundColor: item.colorIcon }}
                                >
                                    <Image
                                        className="w-2.5"
                                        src={item.icon}
                                        width={10}
                                        height={10}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="grow pl-6 md:pl-3">
                                <div className="flex justify-between items-center mb-1.5 text-caption-1">
                                    <div className="">{item.person}</div>
                                    <div className="text-[#B2B3BD] transition-colors group-hover:text-white">
                                        {item.time}
                                    </div>
                                </div>
                                <div className="text-caption-2 text-[#B2B3BD] transition-colors group-hover:text-white">
                                    {item.title}{" "}
                                    <span className="text-link transition-colors group-hover:text-white">
                                        {item.details}
                                    </span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
                <div className="mt-8 text-center md:mt-4">
                    <Link
                        className="btn-black px-8 md:w-full"
                        href="/notifications"
                    >
                        See all incoming activity
                    </Link>
                </div>
            </div>
        </Transition>
    </Menu>
);

export default Notifications;
