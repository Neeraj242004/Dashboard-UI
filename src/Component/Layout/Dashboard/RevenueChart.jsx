import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts"

const data = [
  { name: "Jan", revenue: 40000, expenses: 24000 },
  { name: "Feb", revenue: 50000, expenses: 30000 },
  { name: "Mar", revenue: 45000, expenses: 28000 },
  { name: "Apr", revenue: 60000, expenses: 35000 },
  { name: "May", revenue: 55000, expenses: 32000 },
  { name: "Jun", revenue: 70000, expenses: 40000 },
  { name: "Jul", revenue: 65000, expenses: 38000 },
  { name: "Aug", revenue: 75000, expenses: 42000 },
  { name: "Sep", revenue: 72000, expenses: 41000 },
  { name: "Oct", revenue: 80000, expenses: 45000 },
  { name: "Nov", revenue: 85000, expenses: 50000 },
  { name: "Dec", revenue: 90000, expenses: 55000 },
]

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">

      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">
        Revenue Overview
      </h2>

      {/* Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer>
          <BarChart data={data} barGap={6}>
            
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />

            <Tooltip />
            <Legend />

            {/* Revenue */}
            <Bar
              dataKey="revenue"
              fill="#4f46e5"
              radius={[6, 6, 0, 0]}
            />

            {/* Expenses */}
            <Bar
              dataKey="expenses"
              fill="#c4b5fd"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default RevenueChart