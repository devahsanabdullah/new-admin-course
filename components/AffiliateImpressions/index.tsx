import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { useColorMode } from "@chakra-ui/react";
import millify from "millify";

const data = [
    {
        name: "Graphics",
        uv: 95000,
        pv: 67000,
    },
    {
        name: "Theme",
        uv: 62000,
        pv: 50000,
    },
    {
        name: "Template",
        uv: 47000,
        pv: 37000,
    },
];

type AffiliateImpressionsProps = {
    className?: string;
};

const AffiliateImpressions = ({ className }: AffiliateImpressionsProps) => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";

    const formatterYAxis = (value: number) => {
        if (value === 0) {
            return "";
        }
        return `${millify(value)}`;
    };

    return (
        <div className={className || ""}>
            <div className="mb-16 text-h6 2xl:mb-12 md:mb-8">
                Affiliate Impressions
            </div>
            <div className="h-[17.6rem] -ml-5">
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
                            tickFormatter={formatterYAxis}
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
        </div>
    );
};

export default AffiliateImpressions;
