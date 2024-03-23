import { useState } from "react";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type EditorProps = {
    className?: string;
    title?: string;
    titleButton: string;
    small?: boolean;
};

const Editor = ({ className, title, titleButton, small }: EditorProps) => {
    const [message, setMessage] = useState<string>("");

    const actions = [
        {
            icon: "editor-smile",
            onClick: () => console.log("Smile"),
        },
        {
            icon: "editor-bold",
            onClick: () => console.log("Text bold"),
        },
        {
            icon: "editor-italic",
            onClick: () => console.log("Text italic"),
        },
        {
            icon: "editor-image",
            onClick: () => console.log("Add image"),
        },
    ];

    return (
        <div className={className || ""}>
            {title && <div className="mb-8 text-h6">{title}</div>}
            <div className="rounded-xl bg-grey-light/20 overflow-hidden dark:bg-grey-light/[0.02]">
                <div
                    className={`flex justify-between items-center p-6 ${
                        small ? "px-4" : ""
                    }`}
                >
                    <div className="flex items-center space-x-4">
                        {actions.map((action, index) => (
                            <button
                                className="group w-6 h-6 rounded bg-grey-light text-0 transition-colors hover:bg-black/30 dark:bg-grey-light/10"
                                key={index}
                                onClick={action.onClick}
                            >
                                <Icon
                                    className="fill-grey transition-colors group-hover:fill-white"
                                    name={action.icon}
                                />
                            </button>
                        ))}
                    </div>
                    <button className="group ml-auto text-0">
                        <Icon
                            className="fill-black transition-colors group-hover:fill-primary dark:fill-grey-light/20"
                            name="plus-circle"
                        />
                    </button>
                </div>
                <div
                    className={`p-6 pt-8 border-t border-grey-light dark:border-grey-light/10 ${
                        small ? "px-4" : ""
                    }`}
                >
                    <div className="">
                        <textarea
                            className="w-full h-30 p-0 bg-transparent border-0 text-menu text-black resize-none outline-none placeholder:text-grey dark:text-white"
                            value={message}
                            onChange={(e: any) => setMessage(e.target.value)}
                            placeholder="Text"
                            required
                        ></textarea>
                    </div>
                    <div className="flex flex-nowrap mt-6 -mx-6 space-x-4 overflow-auto scrollbar-none before:w-6 before:shrink-0 after:w-6 after:shrink-0">
                        {[
                            "/images/message-pic-1.jpg",
                            "/images/message-pic-2.jpg",
                        ].map((image, index) => (
                            <div
                                className="group/image relative shrink-0 w-[10.75rem]"
                                key={index}
                            >
                                <Image
                                    className="w-full rounded-lg"
                                    src={image}
                                    width={172}
                                    height={120}
                                    alt=""
                                />
                                <button className="group absolute top-2 right-2 w-4 h-4 bg-white rounded-full text-0 invisible opacity-0 transition-all group-hover/image:visible group-hover/image:opacity-100 dark:bg-dark-2">
                                    <Icon
                                        classSize="w-4 h-4"
                                        className="transition-transform group-hover:rotate-90 dark:fill-white"
                                        name="close-fat"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button
                className={`btn-black min-w-[14.5rem] mt-6 md:w-full ${
                    small ? "w-full" : ""
                }`}
            >
                {titleButton}
            </button>
        </div>
    );
};

export default Editor;
