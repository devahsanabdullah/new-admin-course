import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { useColorMode } from "@chakra-ui/react";

const data = [
    {
        name: "Oct",
        uv: 65,
        pv: 50,
    },
    {
        name: "Mar",
        uv: 50,
        pv: 38,
    },
    {
        name: "Aug",
        uv: 30,
        pv: 22,
    },
];

type IncomeProps = {};

const Income = ({}: IncomeProps) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    return (
        <div className="w-[calc(50%-2rem)] mx-4 p-2 pt-8 bg-primary rounded-3xl md:w-full md:mx-0 md:mt-8">
            <div className="mb-8 px-6 text-h6 text-white">Income</div>
            <div className="p-6 bg-white rounded-2xl dark:bg-dark-2">
                <div className="h-[12rem] -ml-9 -mr-1">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 1,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                            barSize={20}
                            barGap={4}
                        >
                            <CartesianGrid
                                vertical={false}
                                strokeDasharray="0"
                                stroke={isDarkMode ? "#4A4C55" : "#E4E4E4"}
                                strokeOpacity={0.4}
                            />
                            <XAxis
                                dataKey="name"
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 13,
                                    fontWeight: "600",
                                    fill: "#808191",
                                }}
                            />
                            <YAxis
                                type="number"
                                tickLine={false}
                                axisLine={false}
                                tick={{
                                    fontSize: 13,
                                    fontWeight: "600",
                                    fill: "#808191",
                                }}
                            />
                            <Bar dataKey="uv" fill="#6C5DD3" />
                            <Bar dataKey="pv" fill="#A0D7E7" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <button className="btn-black w-full mt-2">
                    Withdraw Earning
                </button>
            </div>
        </div>
    );
};

export default Income;
