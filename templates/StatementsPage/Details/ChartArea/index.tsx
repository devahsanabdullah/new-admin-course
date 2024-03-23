import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Oct",
        uv: 60,
        pv: 40,
    },
    {
        name: "Nov",
        uv: 28,
        pv: 17,
    },
    {
        name: "Dec",
        uv: 45,
        pv: 36,
    },
    {
        name: "Jun",
        uv: 40,
        pv: 28,
    },
    {
        name: "Feb",
        uv: 28,
        pv: 17,
    },
];

type ChartAreaProps = {};

const ChartArea = ({}: ChartAreaProps) => (
    <div className="h-[12rem] -ml-6">
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
                    horizontal={false}
                    vertical={false}
                    strokeDasharray="0"
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
);

export default ChartArea;
