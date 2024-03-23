import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Oct",
        uv: 20,
       
    },
    {
        name: "Mar",
        uv: 15,
        
    },
    {
        name: "Jul",
        uv: 40,
    
    },
    {
        name: "Aug",
        uv: 16,
       
    },
    {
        name: "Oct",
        uv: 20,
       
    },
    {
        name: "Mar",
        uv: 15,
        
    },
    {
        name: "Jul",
        uv: 40,
    
    },
    {
        name: "Aug",
        uv: 16,
       
    },
];

type EarningChartProps = {stat:any};

const EarningChart = ({stat}: EarningChartProps) => (
    <div className=" mx-4 p-2 pt-8 bg-[#FFEBF6] rounded-3xl w-full md:mx-0 dark:bg-secondary">
        <div className="mb-8 px-6 text-h6">Earning</div>
        <div className="p-6 bg-white rounded-2xl dark:bg-dark-2">
            <div className="h-[11rem] -ml-8 -mr-1 dark:text-black">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={stat}
                        margin={{
                            top: 2,
                            right: 6,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid
                            horizontal={false}
                            vertical={false}
                            strokeDasharray="3 3"
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
                            padding={{ left: 5 }}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fontSize: 13,
                                fontWeight: "600",
                                fill: "#808191",
                            }}
                            padding={{ bottom: 5 }}
                        />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#A0D7E7"
                            strokeWidth={2}
                            dot={false}
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
            <button className="btn-primary w-full mt-4">Go Analytics</button>
        </div>
    </div>
);

export default EarningChart;
