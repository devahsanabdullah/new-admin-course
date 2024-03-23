import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import Image from "@/components/Image";

import { comments } from "@/mocks/comments";

type ActivityProps = {};

const Activity = ({}: ActivityProps) => {
    const [activeId, setActiveId] = useState<string>("");
    const [checkboxes, setCheckboxes] = useState([
        {
            id: "0",
            title: "Likes",
            isChecked: false,
        },
        {
            id: "1",
            title: "Comments",
            isChecked: true,
        },
        {
            id: "2",
            title: "Mention",
            isChecked: false,
        },
        {
            id: "3",
            title: "Followers",
            isChecked: true,
        },
        {
            id: "4",
            title: "Mention",
            isChecked: false,
        },
        {
            id: "5",
            title: "Other",
            isChecked: false,
        },
    ]);

    const handleCheckboxChange = (checkboxId: string) => {
        const updatedCheckboxes = [...checkboxes];
        const checkboxIndex = updatedCheckboxes.findIndex(
            (checkbox) => checkbox.id === checkboxId
        );
        updatedCheckboxes[checkboxIndex].isChecked =
            !updatedCheckboxes[checkboxIndex].isChecked;
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div className="card-shadow grow mr-16 p-8 bg-white 3xl:mr-12 xl:mr-0 xl:mb-8 dark:bg-dark-2">
            <div className="mb-8 text-h6">Your Activity</div>
            <div className="flex">
                <div className="shrink-0 w-32 pr-4 space-y-4 2xl:hidden">
                    {checkboxes.map((checkbox) => (
                        <Checkbox
                            label={checkbox.title}
                            value={checkbox.isChecked}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                            key={checkbox.id}
                        />
                    ))}
                </div>
                <div className="grow">
                    <div className="2xl:-mx-4">
                        {comments.map((comment) => (
                            <div
                                className={`flex px-4 py-8 rounded-xl transition-colors cursor-pointer hover:bg-grey-light/40 dark:hover:bg-grey-light/[.03] ${
                                    activeId === comment.id
                                        ? "!bg-primary !text-white"
                                        : ""
                                }`}
                                key={comment.id}
                                onClick={() => setActiveId(comment.id)}
                            >
                                <div className="relative shrink-0 w-12 h-12">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={comment.avatar}
                                        width={48}
                                        height={48}
                                        alt=""
                                    />
                                    <div className="absolute top-0 right-0 flex justify-center items-center w-5 h-5 rounded-full border-2 border-white bg-[#FF9A7B]">
                                        <Image
                                            className="w-2.5"
                                            src="/images/chat.svg"
                                            width={10}
                                            height={10}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="grow px-6 2xl:pr-0">
                                    <div className="mb-2 text-title">
                                        {comment.person}
                                    </div>
                                    <div
                                        className={`mb-4 text-caption-1 text-grey ${
                                            activeId === comment.id
                                                ? "!text-white"
                                                : ""
                                        }`}
                                    >
                                        {comment.title}
                                        <span
                                            className={`mx-2 text-link ${
                                                activeId === comment.id
                                                    ? "!text-white"
                                                    : ""
                                            }`}
                                        >
                                            {comment.details}
                                        </span>
                                        {comment.time}
                                    </div>
                                    <div
                                        className={`text-grey ${
                                            activeId === comment.id
                                                ? "!text-white"
                                                : ""
                                        }`}
                                    >
                                        &quot;{comment.content}&quot;
                                    </div>
                                </div>
                                <div className="relative shrink-0 w-24 h-24 rounded-lg bg-[#A0D7E7] before:absolute before:top-full before:left-2 before:right-2 before:h-2 before:rounded-b-lg before:bg-[#A0D7E7]/50 2xl:hidden">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={comment.image}
                                        width={96}
                                        height={96}
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 text-center">
                        <button className="btn-black min-w-[11.2rem]">
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
