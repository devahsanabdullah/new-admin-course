import { BarChart, Bar, ResponsiveContainer } from "recharts";

import { users } from "@/mocks/users";

type UsersProps = {};

const Users = ({}: UsersProps) => (
    <div className="w-[calc(50%-2rem)] card-shadow mx-4 pt-8 bg-white md:w-full md:mx-0 dark:bg-dark-2">
        <div className="mb-2 px-8 text-h6">Users</div>
        <div className="">
            {users.map((user) => (
                <div
                    className="flex items-end pt-6 px-8 pb-9 border-b border-grey-light dark:border-grey-light/10"
                    key={user.id}
                >
                    <div className="grow pr-3">
                        <div className="text-caption-2 text-grey">
                            {user.title}
                        </div>
                        <div className="text-h4">{user.value}</div>
                        <div className="text-menu text-green">
                            {user.percent}%
                        </div>
                    </div>
                    <div className="w-30 h-18">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={user.data}>
                                <Bar
                                    dataKey="uv"
                                    fill={user.color}
                                    radius={4}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            ))}
        </div>
        <div className="pt-2.5 px-4 pb-3 text-center">
            <button className="text-caption-1 text-link transition-colors hover:text-primary">
                Go to setting
            </button>
        </div>
    </div>
);

export default Users;
