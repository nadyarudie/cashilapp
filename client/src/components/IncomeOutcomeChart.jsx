import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
  
  export default function IncomeOutcomeChart({ data }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4">
        <h2 className="text-gray-500 mb-4">Income vs Outcome</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={3} />
            <Line type="monotone" dataKey="outcome" stroke="#ef4444" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  