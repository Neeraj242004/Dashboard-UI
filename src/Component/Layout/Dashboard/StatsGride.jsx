import { ArrowRight, DollarSign, Eye, ShoppingCart, Users } from 'lucide-react'
import React from 'react'

const Stats = [
  {
    title: "Total Revenue",
    value: "$132,678",
    change: "+15.8%",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Active Users",
    value: "15,450",
    change: "+5.89%",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Total Orders",
    value: "4,720",
    change: "+14.3%",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Page Views",
    value: "132,890",
    change: "-10.5%",
    icon: Eye,
    color: "from-orange-500 to-red-600",
  },
]

const StatsGrid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
      
      {Stats.map((item, index) => {
        const Icon = item.icon
        const isPositive = item.change.startsWith("+")

        return (
          <div
            key={index}
            className='bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300'
          >
            <div className='flex items-start justify-between'>
              
              <div>
            
                <p className='text-xs text-slate-500 mb-1'>
                  {item.title}
                </p>

        
                <h2 className='text-lg font-semibold text-slate-800'>
                  {item.value}
                </h2>

    
                <div className='flex items-center mt-1 text-[11px] space-x-1'>
                  
                  <ArrowRight
                    className={`w-3 h-3 ${
                      isPositive
                        ? "text-green-600 rotate-45"
                        : "text-red-500 -rotate-45"
                    }`}
                  />

                  <span
                    className={`font-medium ${
                      isPositive
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.change}
                  </span>

                  <span className='text-slate-400'>vs last</span>

                </div>
              </div>

              {/* Icon */}
              <div className={`p-2 rounded-xl bg-gradient-to-r ${item.color}`}>
                <Icon className='w-4 h-4 text-white' />
              </div>

            </div>

            {/* Progress Bar */}
            <div className='mt-3 h-1.5 bg-slate-200 rounded-full'>
              <div className={`h-full w-2/3 bg-gradient-to-r ${item.color}`} />
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default StatsGrid