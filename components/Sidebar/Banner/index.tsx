import Image from "@/components/Image";

type BannerProps = {};

const Banner = ({}: BannerProps) => (
    <div className="relative mt-6 p-2 pb-5 rounded-2xl bg-[#CFC8FF] before:absolute before:-z-1 before:inset-2 before:-bottom-2 before:rounded-2xl before:bg-[#CFC8FF]/50 lg:hidden">
        <div className="mb-1.5">
            <Image
                className="w-full"
                src="/images/banner.png"
                width={200}
                height={200}
                alt=""
            />
        </div>
        <div className="px-3">
            <button className="btn-white w-full">Get Pro Now</button>
        </div>
    </div>
);

export default Banner;
