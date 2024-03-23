import { LineChart, Line, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Page A",
        uv: 5000,
    },
    {
        name: "Page B",
        uv: 2000,
    },
    {
        name: "Page C",
        uv: 5000,
    },
    {
        name: "Page D",
        uv: 1780,
    },
    {
        name: "Page E",
        uv: 7890,
    },
    {
        name: "Page F",
        uv: 4390,
    },
    {
        name: "Page G",
        uv: 3490,
    },
];

type ChartLineProps = {};

const ChartLine = ({}: ChartLineProps) => (
    <div className="grow h-6">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 2,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid
                    horizontal={false}
                    vertical={false}
                    strokeDasharray="3 3"
                />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#6C5DD3"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default ChartLine;
