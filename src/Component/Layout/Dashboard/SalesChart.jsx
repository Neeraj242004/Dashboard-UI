import React from "react"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { name: "Electronics", value: 50, color: "#3b82f6" },
  { name: "Clothing", value: 30, color: "#22c55e" },
  { name: "Home", value: 20, color: "#f59e0b" },
  { name: "Books", value: 49, color: "#6cf9b0"}
]

const CustomPieChart = () => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm h-full">

      <h2 className="text-lg font-semibold mb-4">
        Category Distribution
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <PieChart>

            <Pie
              data={data}
              dataKey="value"   
              nameKey="name"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />

          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default CustomPieChart