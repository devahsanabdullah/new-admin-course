import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { notifications } from "@/mocks/notifications";

type NotificationsProps = {
    setValue: any;
};

const Notifications = ({ setValue }: NotificationsProps) => {
    const [activeId, setActiveId] = useState<string>("");

    const actions = [
        {
            icon: "message",
            onClick: () => console.log("Action"),
        },
        {
            icon: "like",
        },
        {
            icon: "star",
            onClick: () => console.log("Action"),
        },
        {
            icon: "dots",
            onClick: () => console.log("Action"),
        },
    ];

    const handleLikeClick = (value: any) => {
        setActiveId(value);
        setValue();
    };

    return (
        <div className="p-8 bg-white card-shadow dark:bg-dark-2">
            <div className="mb-3 text-h6">Recent Notification</div>
            <div className="-mx-4">
                {notifications.map((notification) => (
                    <div
                        className={`flex px-4 py-8 rounded-xl transition-colors cursor-pointer hover:bg-grey-light/40 dark:hover:bg-grey-light/[.03] ${
                            activeId === notification.id
                                ? "!bg-primary !text-white"
                                : ""
                        }`}
                        key={notification.id}
                    >
                        <div className="relative shrink-0 w-12 h-12">
                            <Image
                                className="w-full h-full object-cover opacity-100"
                                src={notification.avatar}
                                width={48}
                                height={48}
                                alt=""
                            />
                            <div
                                className="absolute top-0 right-0 flex justify-center items-center w-5 h-5 rounded-full border-2 border-white"
                                style={{
                                    backgroundColor: notification.colorIcon,
                                }}
                            >
                                <Image
                                    className="w-2.5 opacity-100"
                                    src={notification.icon}
                                    width={10}
                                    height={10}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grow px-6 md:pr-0 md:pl-4">
                            <div className="mb-2 text-title">
                                {notification.person}
                            </div>
                            <div
                                className={`mb-4 text-caption-1 text-grey ${
                                    activeId === notification.id
                                        ? "!text-white"
                                        : ""
                                }`}
                            >
                                {notification.title}
                                <span
                                    className={`mx-2 text-link ${
                                        activeId === notification.id
                                            ? "!text-white"
                                            : ""
                                    }`}
                                >
                                    {notification.details}
                                </span>
                                {notification.time}
                            </div>
                            <div
                                className={`mb-4 text-grey md:line-clamp-2 ${
                                    activeId === notification.id
                                        ? "!text-white"
                                        : ""
                                }`}
                            >
                                &quot;{notification.content}&quot;
                            </div>
                            <div className="flex space-x-4">
                                {actions.map((action: any, index: number) => (
                                    <button
                                        className={`group w-8 h-8 rounded-full border border-grey-light text-0 transition-colors hover:bg-primary hover:border-primary dark:border-grey-light/10 ${
                                            activeId === notification.id
                                                ? "!border-grey-light hover:!bg-white"
                                                : ""
                                        }`}
                                        key={index}
                                        onClick={
                                            action.icon === "like"
                                                ? () =>
                                                      handleLikeClick(
                                                          notification.id
                                                      )
                                                : action.onClick
                                        }
                                    >
                                        <Icon
                                            className={`fill-black/40 transition-colors group-hover:fill-white dark:fill-grey ${
                                                activeId === notification.id
                                                    ? "!fill-white/40 group-hover:!fill-primary"
                                                    : ""
                                            } ${
                                                activeId === notification.id &&
                                                action.icon === "like"
                                                    ? "!fill-white group-hover:!fill-primary"
                                                    : ""
                                            }`}
                                            classSize="w-3 h-3"
                                            name={action.icon}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="relative shrink-0 w-24 h-24 rounded-lg bg-[#CFC8FF] before:absolute before:top-full before:left-2 before:right-2 before:h-2 before:rounded-b-lg before:bg-[#CFC8FF]/50 md:hidden">
                            <Image
                                className="w-full h-full object-cover"
                                src={notification.image}
                                width={96}
                                height={96}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 text-center">
                <button className="btn-black min-w-[11.2rem]">Load More</button>
            </div>
        </div>
    );
};

export default Notifications;
