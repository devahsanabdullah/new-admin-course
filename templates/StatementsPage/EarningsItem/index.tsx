import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
];
const COLORS = ["#6C5DD3", "#FFB7F5", "#E4E4E4"];

type EarningsItemProps = {};

const EarningsItem = ({}: EarningsItemProps) => (
    <div className="relative mb-16 p-8 bg-white rounded-3xl text-center before:absolute before:-z-1 before:inset-0 before:-bottom-2 before:bg-white/50 before:rounded-3xl after:absolute after:-z-2 after:top-4 after:left-0 after:right-0 after:-bottom-4 after:rounded-3xl after:bg-[#E3E6EC]/90 after:blur-[2.75rem] 2xl:w-[calc(50%-2rem)] 2xl:mx-4 2xl:mb-0 md:w-full md:mx-0 md:mb-8 dark:bg-dark-2 dark:before:bg-dark-2/50 dark:after:bg-dark-3/50">
        <div className="w-56 h-56 mx-auto mb-6">
            <ResponsiveContainer>
                <PieChart width={800} height={400}>
                    <Pie
                        data={data}
                        cx={107}
                        cy={107}
                        innerRadius={82}
                        outerRadius={112}
                        fill="#8884d8"
                        dataKey="value"
                        isAnimationActive={false}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                style={{
                                    outline: "none",
                                    stroke: "transparent",
                                }}
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="mb-3 text-h6">Earnings By Item</div>
        <div className="mb-3 text-d2">479.4</div>
        <div className="max-w-[10rem] mx-auto mb-10 text-grey">
            Update your payout method in Settings
        </div>
        <div className="flex justify-center space-x-6">
            <div className="flex items-center text-grey">
                <div className="shrink-0 w-5 h-5 mr-2 rounded-lg bg-primary"></div>
                Templates
            </div>
            <div className="flex items-center text-grey">
                <div className="shrink-0 w-5 h-5 mr-2 rounded-lg bg-[#FFA2C0]"></div>
                Themes
            </div>
        </div>
    </div>
);

export default EarningsItem;
