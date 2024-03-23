import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type FieldProps = {
    className?: string;
    classInput?: string;
    label?: string;
    textarea?: boolean;
    type?: string;
    value: string;
    onChange: any;
    placeholder?: string;
    required?: boolean;
};

const Field = ({
    className,
    classInput,
    label,
    textarea,
    type,
    value,
    onChange,
    placeholder,
    required,
}: FieldProps) => {
    return (
        <div className={`${className || ""}`}>
            <div className="">
                {label && (
                    <div className="mb-4 text-caption-2 text-[#B2B3BD]">
                        {label}
                    </div>
                )}
                <div className={`relative ${textarea ? "text-0" : ""}`}>
                    {textarea ? (
                        <textarea
                            className={`w-full h-38 px-5 py-3 bg-grey-light/30 border-2 border-transparent rounded-lg text-menu font-semibold text-black outline-none transition-colors placeholder:text-grey resize-none focus:!border-primary focus:!bg-transparent dark:bg-grey-light/[.03] dark:text-white ${
                                classInput || ""
                            }`}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            required={required}
                        ></textarea>
                    ) : (
                        <input
                            className={twMerge(
                                `w-full h-12 px-5 bg-grey-light/30 border-2 border-transparent rounded-lg text-menu font-semibold text-black outline-none transition-colors placeholder:text-grey focus:!border-primary focus:!bg-transparent dark:bg-grey-light/[.03] dark:text-white ${
                                    classInput || ""
                                }`
                            )}
                            type={type || "text"}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            required={required}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Field;
