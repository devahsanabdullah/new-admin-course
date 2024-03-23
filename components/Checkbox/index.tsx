import Icon from "@/components/Icon";

type CheckboxProps = {
    className?: string;
    label?: string;
    value: any;
    onChange: any;
};

const Checkbox = ({ className, label, value, onChange }: CheckboxProps) => (
    <label
        className={`group relative flex items-start select-none cursor-pointer tap-highlight-color ${
            className || ""
        }`}
    >
        <input
            className="absolute top-0 left-0 opacity-0 invisible"
            type="checkbox"
            value={value}
            onChange={onChange}
            checked={value}
        />
        <span
            className={`relative flex justify-center items-center shrink-0 w-5 h-5 rounded border-2 border-grey-light transition-colors group-hover:border-primary dark:border-grey-light/10 ${
                value ? "bg-primary !border-primary" : ""
            }`}
        >
            <Icon
                className={`fill-white transition-opacity ${
                    value ? "opacity-100" : "opacity-0"
                }`}
                name="check"
            />
        </span>
        {label && (
            <span
                className={`pt-0.25 pl-2 text-caption-1 text-grey transition-colors ${
                    value ? "!text-black dark:!text-white" : ""
                }`}
            >
                {label}
            </span>
        )}
    </label>
);

export default Checkbox;
