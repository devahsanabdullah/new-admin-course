import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Editor from "@/components/Editor";

type NotificationProps = {};

const Notification = ({}: NotificationProps) => (
    <div className="">
        <div className="mb-8 text-h6 md:mb-6">From Notification</div>
        <div className="mb-10">
            <Image
                className="w-full rounded-2xl"
                src="/images/notification-pic.jpg"
                width={314}
                height={200}
                alt=""
            />
        </div>
        <div className="mb-4 text-h5">Collab Landing.</div>
        <div className="flex items-center flex-wrap mb-6">
            <div className="flex items-center mr-4 text-caption-1 text-link">
                <Icon
                    className="mr-2 fill-primary"
                    classSize="w-4 h-4"
                    name="profile-stroke"
                />{" "}
                Glenn Greer
            </div>
            <div className="flex items-center text-caption-1 text-link">
                <Icon
                    className="mr-2 fill-primary"
                    classSize="w-4 h-4"
                    name="clock"
                />{" "}
                Glenn Greer
            </div>
        </div>
        <div className="mb-8 text-grey">
            &quot;Love this so much! What tools do you use to create your 3d
            illustrations?&quot;
        </div>
        <Editor titleButton="Reply Comment" small />
    </div>
);

export default Notification;
