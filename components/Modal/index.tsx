import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type ModalProps = {
    className?: string;
    classWrap?: string;
    classButtonClose?: string;
    visible: boolean;
    onClose: () => void;
    initialFocus?: any;
    children: React.ReactNode;
};

const Modal = ({
    className,
    classWrap,
    classButtonClose,
    visible,
    onClose,
    initialFocus,
    children,
}: ModalProps) => {
    return (
        <Transition show={visible} as={Fragment}>
            <Dialog
                initialFocus={initialFocus}
                className={`fixed inset-0 z-50 flex p-6 overflow-auto scroll-smooth md:px-4 ${
                    className || ""
                }`}
                onClose={onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className="fixed inset-0 bg-black/70"
                        aria-hidden="true"
                    />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel
                        className={twMerge(
                            `relative z-10 max-w-[39.25rem] w-full m-auto p-8 bg-white rounded-3xl shadow-2xl dark:bg-dark-2 ${
                                classWrap || ""
                            }`
                        )}
                    >
                        {children}
                        <button
                            className={twMerge(
                                `absolute top-4 right-6 w-12 h-12 text-0 rounded-full bg-white shadow-xl fill-black hover:!fill-primary dark:bg-dark-2 dark:fill-white ${
                                    classButtonClose || ""
                                }`
                            )}
                            onClick={onClose}
                        >
                            <Icon
                                className="fill-inherit transition-colors"
                                name="close-fat"
                            />
                        </button>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};

export default Modal;
