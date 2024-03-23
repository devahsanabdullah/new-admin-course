import Image from "@/components/Image";

const files = [
    {
        id: "0",
        title: "Attachment.PNG",
        size: "3.6 MB",
        color: "#CFC8FF",
        image: "/images/figure-1.png",
    },
    {
        id: "1",
        title: "Attachment.PNG",
        size: "12.6 MB",
        color: "#A0D7E7",
        image: "/images/figure-5.png",
    },
];

type MessageProps = {};

const Message = ({}: MessageProps) => (
    <div className="relative mb-10 pb-10 pl-18 border-b border-grey-light xl:pl-0 md:mb-4 md:pb-0 md:border-b-0 dark:border-grey-light/10">
        <div className="flex items-center mb-3">
            <div className="absolute top-0 left-0 shrink-0 w-12 h-12 xl:static xl:mr-4">
                <Image
                    className="w-full h-full object-cover opacity-100"
                    src="/images/avatar-3.png"
                    width={48}
                    height={48}
                    alt=""
                />
            </div>
            <div className="flex items-center xl:flex-col xl:items-start">
                <div className="text-title">Joel Becker</div>
                <div className="ml-6 text-caption-1 text-[#B2B3BD] xl:ml-0 xl:mt-1">
                    12h
                </div>
            </div>
        </div>
        <div className="mb-8 text-h5 xl:mb-6">
            When is the Sketch version available for download?
        </div>
        <div className="space-y-6 text-grey">
            <p>
                hanks! it&apos;s amazing. however, I cannot open this and
                &apos;cleverly&apos; which was also just released by the same
                author, on sketch 63.1.
            </p>
            <p>
                I get a message that says that the file cannot be opened. do you
                have any idea why this might be? can you upload a compatible
                file with this sketch version please? I'll appreciate the
                support. thanks in advance
            </p>
        </div>
        <div className="flex flex-wrap mt-4 -ml-2 md:block md:mt-4 md:ml-0 md:space-y-4">
            {files.map((file) => (
                <div
                    className="relative flex items-center mt-2 ml-2 p-1 pr-2 text-caption-1 cursor-pointer md:w-full md:ml-0 md:mt-0"
                    key={file.id}
                >
                    <div
                        className="flex justify-center items-center w-12 h-12 mr-3 rounded-xl"
                        style={{ backgroundColor: file.color }}
                    >
                        <Image
                            className="w-10"
                            src={file.image}
                            width={40}
                            height={40}
                            alt=""
                        />
                    </div>
                    <div className="grow">
                        <div className="text-link dark:text-white">
                            {file.title}
                        </div>
                        <div className="">{file.size}</div>
                    </div>
                    <div
                        className="absolute inset-0 -z-1 opacity-50 rounded-2xl"
                        style={{ backgroundColor: file.color }}
                    ></div>
                </div>
            ))}
        </div>
    </div>
);

export default Message;
