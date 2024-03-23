import Image from "@/components/Image";

type BannerProps = {
    className?: string;
    title: string;
    content: string;
    titleButton: string;
};

const Banner = ({ className, title, content, titleButton }: BannerProps) => (
    <div
        className={`relative p-16 bg-primary rounded-3xl overflow-hidden 2xl:px-10 md:p-8 ${
            className || ""
        }`}
    >
        <div className="absolute top-12 left-[17.4rem] w-[60rem] 2xl:left-auto 2xl:top-1/2 2xl:-right-44 2xl:w-[23.75rem] 2xl:-translate-y-1/2 md:static md:w-56 md:mx-auto md:mb-6 md:translate-y-0">
            <Image
                className="w-full"
                src="/images/ball-2.png"
                width={960}
                height={960}
                alt=""
                unoptimized
            />
        </div>
        <div className="w-[24rem] text-white md:w-full md:text-center">
            <div className="text-h3 md:mb-4 xl:text-h4 md:text-h5">{title}</div>
            <div className="mb-2.5 md:mb-8">{content}</div>
            <button className="btn-white min-w-[11.5rem] shadow-[0_0.25rem_1rem_0_rgba(0,0,0,0.25)]">
                {titleButton}
            </button>
        </div>
    </div>
);

export default Banner;
