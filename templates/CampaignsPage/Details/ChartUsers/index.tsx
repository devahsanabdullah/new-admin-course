import {
    BarChart,
    Bar,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 400,
        pv: 78,
    },
    {
        name: "Feb",
        uv: 400,
        pv: 0,
    },
    {
        name: "Mar",
        uv: 340,
        pv: 50,
    },
    {
        name: "Apr",
        uv: 290,
        pv: 90,
    },
    {
        name: "May",
        uv: 500,
        pv: 0,
    },
    {
        name: "Jun",
        uv: 220,
        pv: 80,
    },
    {
        name: "Jul",
        uv: 260,
        pv: 100,
    },
];

type ChartUsersProps = {};

const ChartUsers = ({}: ChartUsersProps) => (
    <div className="h-[10.5rem] -ml-6">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                barSize={4}
            >
                <CartesianGrid
                    horizontal={false}
                    vertical={false}
                    strokeDasharray="3 3"
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{
                        fontSize: 13,
                        fontWeight: "600",
                        fill: "#fff",
                    }}
                />
                <Bar dataKey="uv" stackId="a" fill="#fff" />
                <Bar dataKey="pv" stackId="a" fill="#fff" fillOpacity={0.4} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default ChartUsers;
