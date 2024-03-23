import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useColorMode } from "@chakra-ui/react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type PaymentMethodProps = {};

const PaymentMethod = ({}: PaymentMethodProps) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";
    const [plan, setPlan] = useState<string>("paypal");

    return (
        <div className="card-shadow p-8 bg-white dark:bg-dark-2">
            <div className="mb-8 text-h6">Choose A Payment Method</div>
            <div className="flex md:block">
                <div className="shrink-0 w-56 p-8 bg-white rounded-2xl shadow-[0_0.7rem_2rem_rgba(227,230,236,0.6)] text-center md:w-full md:mb-8 dark:bg-dark-2 dark:shadow-[0_0.7rem_2rem_rgba(0,0,0,0.3)]">
                    <div className="w-20 h-20 mx-auto mb-8 bg-[#CFC8FF] rounded-3xl">
                        <Image
                            className="w-full"
                            src="/images/figure-5.png"
                            width={80}
                            height={80}
                            alt=""
                        />
                    </div>
                    <div className="mb-4 text-title text-green">
                        payout@ui8.net
                    </div>
                    <div className="mb-8 text-caption-2 text-[#B2B3BD]">
                        Your selected payout method was confirmed on Feb 24,
                        2019.
                    </div>
                    <div className="">
                        <Image
                            className="w-22 opacity-100"
                            src="/images/paypal.svg"
                            width={88}
                            height={22}
                            alt=""
                        />
                    </div>
                </div>
                <div className="grow pl-4 2xl:pl-32 xl:pl-4 md:pl-0">
                    <RadioGroup value={plan} onChange={setPlan}>
                        <RadioGroup.Option
                            className="flex mb-4 p-8 pb-10 shadow-[0_0_0_0.0625rem_#E4E4E4] rounded-2xl cursor-pointer transition-shadow hover:shadow-[0_0_0_0.0625rem_#6C5DD3] ui-checked:!shadow-[0_0_0_0.125rem_#6C5DD3] dark:shadow-[0_0_0_0.0625rem_rgba(228,228,228,.1)]"
                            value="paypal"
                        >
                            <div className="shrink-0 mt-0.5 relative w-4 h-4 border-2 border-grey-light rounded transition-colors ui-checked:border-primary ui-checked:bg-primary dark:border-grey-light/10 dark:ui-checked:border-primary">
                                <Icon
                                    className="absolute -top-0.5 -left-0.5 fill-transparent ui-checked:fill-white"
                                    classSize="w-4 h-4"
                                    name="check"
                                />
                            </div>
                            <div className="grow pl-9">
                                <div className="mb-4">
                                    <Image
                                        className="w-22 opacity-100"
                                        src="/images/paypal.svg"
                                        width={88}
                                        height={22}
                                        alt=""
                                    />
                                </div>
                                <div className="max-w-[8.5rem] mb-4 text-caption-2 text-[#B2B3BD]">
                                    Your Paypal account has been authorized for
                                    payouts.
                                </div>
                                <button className="btn-grey h-10 px-5.5 dark:bg-grey-light/10 dark:text-white dark:hover:bg-grey-light/20">
                                    Deauthorize
                                </button>
                            </div>
                        </RadioGroup.Option>
                        <RadioGroup.Option
                            className="flex items-center px-8 py-6.5 shadow-[0_0_0_0.0625rem_#E4E4E4] rounded-2xl cursor-pointer transition-shadow hover:shadow-[0_0_0_0.0625rem_#6C5DD3] ui-checked:!shadow-[0_0_0_0.125rem_#6C5DD3] dark:shadow-[0_0_0_0.0625rem_rgba(228,228,228,.1)]"
                            value="payoneer"
                        >
                            <div className="shrink-0 relative w-4 h-4 border-2 border-grey-light rounded transition-colors ui-checked:border-primary ui-checked:bg-primary dark:border-grey-light/10">
                                <Icon
                                    className="absolute -top-0.5 -left-0.5 fill-transparent ui-checked:fill-white"
                                    classSize="w-4 h-4"
                                    name="check"
                                />
                            </div>
                            <div className="grow pl-9">
                                <div className="">
                                    <Image
                                        className="w-22 opacity-100"
                                        src={
                                            isDarkMode
                                                ? "/images/payoneer-light.svg"
                                                : "/images/payoneer-dark.svg"
                                        }
                                        width={86}
                                        height={30}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </RadioGroup.Option>
                    </RadioGroup>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
