import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@/components/Icon";

type ToggleThemeProps = {
    visible?: boolean;
};

const ToggleTheme = ({ visible }: ToggleThemeProps) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div
            className="flex items-center cursor-pointer"
            onClick={toggleColorMode}
        >
            <Icon
                className={`mr-8 fill-secondary ${
                    visible ? "xl:hidden lg:inline-block" : ""
                }`}
                name={colorMode === "light" ? "sun" : "moon"}
            />
            <div
                className={`w-16 h-6 p-0.5 rounded-full bg-grey-light/50 ${
                    colorMode === "light" ? "" : "!bg-[#12141B]"
                } ${visible ? "xl:w-14 lg:w-16" : ""}`}
            >
                <div
                    className={`rounded-full bg-secondary ${
                        colorMode === "light"
                            ? "w-5 h-5 border-4 border-white shadow-[0_0.25rem_0.5rem_0_rgba(0,0,0,0.16)]"
                            : `w-1 h-4 mt-0.5 translate-x-12 ${
                                  visible
                                      ? "xl:translate-x-10 lg:translate-x-12"
                                      : ""
                              }`
                    }`}
                ></div>
            </div>
        </div>
    );
};

export default ToggleTheme;
