import Image from "@/components/Image";

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className="relative p-16 pb-20 bg-primary rounded-3xl overflow-hidden 2xl:p-12 xl:px-8 md:flex md:flex-col-reverse">
        <div className="relative z-2 max-w-[22.5rem] text-white md:max-w-full md:text-center">
            <div className="-mb-1 text-h3 md:text-h4 md:mb-0">
                Course video
            </div>
            <div className="mb-4">Create Your Course Dashboard in Minutes</div>
            <button className="btn-white min-w-[13.125rem]">
                Check all settings
            </button>
        </div>
        <div className="absolute top-10 left-[26.5rem] right-22 2xl:left-[23rem] 2xl:right-12  xl:top-1/2 xl:-translate-y-1/2 xl:w-[11rem] xl:left-auto xl:right-16 md:static md:w-[12.6rem] md:mx-auto md:mb-6 md:translate-y-0">
            <Image
                className="w-full"
                src="/images/ball.png"
                width={542}
                height={542}
                alt=""
            />
        </div>
    </div>
);

export default Details;
