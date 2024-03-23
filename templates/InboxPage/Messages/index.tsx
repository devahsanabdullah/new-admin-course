import { useState } from "react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { messages } from "@/mocks/messages";

type MessagesProps = {};

const Messages = ({}: MessagesProps) => {
    const [activeId, setActiveId] = useState<string>("1");

    const actions = [
        {
            icon: "message",
            onClick: () => console.log("Action"),
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

    return (
        <div className="p-8 bg-white card-shadow dark:bg-dark-2">
            <div className="mb-3 text-h6">Recent Messages</div>
            <div className="-mx-4">
                {messages.map((message) => (
                    <div
                        className={`relative pl-22 pr-8 py-8 rounded-xl transition-colors cursor-pointer hover:bg-grey-light/40 xl:p-4 dark:hover:bg-grey-light/[0.03] ${
                            activeId === message.id
                                ? "!bg-primary !text-white"
                                : ""
                        }`}
                        key={message.id}
                    >
                        <div className="xl:flex xl:items-center xl:mb-4">
                            <div className="absolute top-8 left-4 shrink-0 w-12 h-12 xl:static xl:mr-4">
                                <Image
                                    className="w-full h-full object-cover opacity-100"
                                    src={message.avatar}
                                    width={48}
                                    height={48}
                                    alt=""
                                />
                            </div>
                            <div className="mb-4 text-caption-1 xl:flex xl:flex-col xl:mb-0">
                                <span
                                    className={`text-link ${
                                        activeId === message.id
                                            ? "!text-white"
                                            : ""
                                    }`}
                                >
                                    {message.person}
                                </span>
                                <span
                                    className={`ml-3 text-grey xl:ml-0 ${
                                        activeId === message.id
                                            ? "!text-white"
                                            : ""
                                    }`}
                                >
                                    {message.time}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4 text-title">{message.title}</div>
                        <div
                            className={`mb-4 text-grey ${
                                activeId === message.id ? "!text-white" : ""
                            }`}
                        >
                            &quot;{message.content}&quot;
                        </div>
                        <div className="flex space-x-4">
                            {actions.map((action, index) => (
                                <button
                                    className={`group w-8 h-8 rounded-full border border-grey-light text-0 transition-colors hover:bg-primary hover:border-primary dark:border-grey-light/10 ${
                                        activeId === message.id
                                            ? "!border-grey-light hover:!bg-white"
                                            : ""
                                    }`}
                                    key={index}
                                    onClick={action.onClick}
                                >
                                    <Icon
                                        className={`fill-black/40 transition-colors group-hover:fill-white dark:fill-grey ${
                                            activeId === message.id
                                                ? "!fill-white/40 group-hover:!fill-primary"
                                                : ""
                                        }`}
                                        classSize="w-3 h-3"
                                        name={action.icon}
                                    />
                                </button>
                            ))}
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

export default Messages;
