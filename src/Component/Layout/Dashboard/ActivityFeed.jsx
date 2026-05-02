import React from 'react'
import { CheckCircle, Clock, XCircle, UserPlus, ShoppingCart } from 'lucide-react'

const activities = [
  {
    icon: ShoppingCart,
    text: "New order placed by John Smith",
    time: "2 min ago",
    type: "success",
  },
  {
    icon: UserPlus,
    text: "New user registered",
    time: "10 min ago",
    type: "info",
  },
  {
    icon: CheckCircle,
    text: "Payment received successfully",
    time: "30 min ago",
    type: "success",
  },
  {
    icon: Clock,
    text: "Order #3579 is pending",
    time: "1 hour ago",
    type: "warning",
  },
  {
    icon: XCircle,
    text: "Order #3581 was cancelled",
    time: "2 hours ago",
    type: "error",
  },
]

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">

      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">
        Recent Activity
      </h2>

      {/* Activity List */}
      <div className="space-y-4">

        {activities.map((item, index) => {
          const Icon = item.icon

          return (
            <div key={index} className="flex items-start gap-3">

              {/* Icon */}
              <div className={`
                p-2 rounded-full
                ${item.type === "success" && "bg-green-100 text-green-600"}
                ${item.type === "info" && "bg-blue-100 text-blue-600"}
                ${item.type === "warning" && "bg-yellow-100 text-yellow-600"}
                ${item.type === "error" && "bg-red-100 text-red-600"}
              `}>
                <Icon className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-slate-700">
                  {item.text}
                </p>
                <span className="text-xs text-slate-400">
                  {item.time}
                </span>
              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default ActivityFeed