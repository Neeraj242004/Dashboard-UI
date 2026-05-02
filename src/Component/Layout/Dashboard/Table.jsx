import React from 'react'

const recentOrders = [
  { id: "#3578", customer: "John Smith", product: "iPhone 17", status: "complete", date: "2023-04-05" },
  { id: "#3579", customer: "Rajvir Malhotra", product: "BMW", status: "pending", date: "2024-11-24" },
  { id: "#3580", customer: "Akash Prajapati", product: "Airpods 7", status: "complete", date: "2024-08-10" },
  { id: "#3581", customer: "Sanjay Singhania", product: "Macbook pro", status: "Cancelled", date: "2024-09-15" },
]

const topProducts = [
  { name: "MacBook Pro", sales: 1274, revenue: "$2,29,870", trend: "up", change: "+45.2%" },
  { name: "IPhone 15 Pro", sales: 2347, revenue: "$1,70,260", trend: "down", change: "-33.6%" },
  { name: "Airpods Pro", sales: 2156, revenue: "$80,000", trend: "down", change: "-15.8%" },
  { name: "IPad Air", sales: 1054, revenue: "$492,789", trend: "up", change: "+10.8%" },
]

const Table = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      {/* 🔥 Recent Orders */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            
            <thead>
              <tr className="text-left text-slate-500 border-b">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Product</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Date</th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b last:border-0">

                  <td className="py-2 font-medium">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>

                  {/* Status */}
                  <td>
                    <span className={`px-2 py-1 text-xs rounded-full
                      ${order.status === "complete" && "bg-green-100 text-green-600"}
                      ${order.status === "pending" && "bg-yellow-100 text-yellow-600"}
                      ${order.status === "Cancelled" && "bg-red-100 text-red-600"}
                    `}>
                      {order.status}
                    </span>
                  </td>

                  <td>{order.date}</td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* 🔥 Top Products */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Top Products</h2>

        <div className="space-y-4">

          {topProducts.map((item, index) => (
            <div key={index} className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-slate-800">
                  {item.name}
                </p>
                <p className="text-xs text-slate-500">
                  {item.sales} sales
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold">
                  {item.revenue}
                </p>

                {/* 🔥 Trend color */}
                <p className={`text-xs font-medium
                  ${item.trend === "up" ? "text-green-600" : "text-red-500"}
                `}>
                  {item.change}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Table