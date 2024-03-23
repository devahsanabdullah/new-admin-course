import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Jan",
        uv: 220,
    },
    {
        name: "Feb",
        uv: 400,
    },
    {
        name: "Mar",
        uv: 240,
    },
    {
        name: "Apr",
        uv: 340,
    },
    {
        name: "May",
        uv: 240,
    },
];

type EarningMonthProps = {};

const EarningMonth = ({}: EarningMonthProps) => (
    <div className="pt-3 text-center">
        <div className="w-30 h-28 mx-auto mb-8">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                    <Bar dataKey="uv" fill="#A0D7E7" radius={4} />
                </BarChart>
            </ResponsiveContainer>
        </div>
        <div className="mb-3 text-h6">Your earning this month</div>
        <div className="mb-3 text-d2 text-primary">479.4</div>
        <div className="max-w-[10rem] mx-auto mb-8 text-grey">
            Update your payout method in Settings
        </div>
        <button className="btn-primary w-[14.5rem]">
            Withdraw All Earning
        </button>
    </div>
);

export default EarningMonth;
