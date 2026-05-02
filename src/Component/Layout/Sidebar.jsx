import { 
  LayoutDashboard, Users, ShoppingBag, Calendar, CreditCard,
  FileText, MessageSquare, Package, Settings, BarChart3, Zap,
  ChevronDown
} from 'lucide-react';
import userImg from "../../assets/image.jpg";
import { useState } from 'react';
import React from 'react'

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    active: true,
    submenu: [
      {id: "overview", label: "Overview"},
      {id: "reports", label: "Reports"},
      {id: "insights", label: "Insights"},
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "5.9k",
    active: true,
    submenu:[
      {id: "all-users", label: "All Users"},
      {id: "roles", label: "Roles"},
      {id: "activity", label: "User Activity"},
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-Commerce",
    active: true,
    submenu: [
      {id: "products", label: "Products"},
      {id: "orders", label: "Orders"},
      {id: "customers", label: "Customers"},
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    active: true,
    count: "900",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
    active: true,
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
    active: true,
    badge: "50",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
    active: true,
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
    active: true,
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
    active: true,
  },
]

const Sidebar = ({
  collapsed,
  currentPage,
  onPageChange,
  mobileOpen,
  setMobileOpen
}) => {

  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <>
      {/*  Overlay (mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          ${collapsed ? "w-24" : "w-72"}
          bg-white/80 backdrop-blur-xl flex flex-col
          fixed top-0 left-0 h-screen z-50
          transition-transform duration-300

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0 lg:top-0 lg:h-screen
        `}
      >

        {/* Logo */}
        <div className='p-4'>
          <div className={`flex items-center ${collapsed ? "justify-center" : "space-x-3"}`}>
            
            <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
              <Zap className='w-6 h-6 text-white'/>
            </div>

            {!collapsed && (
              <div>
                <h1 className='text-lg font-bold text-slate-800'>Dash</h1>
                <p className='text-xs text-slate-500'>Admin Panel</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu */}
        <nav className='flex-1 p-2 space-y-2 overflow-y-auto'>

          {menuItems.map((item) => (
            <div key={item.id}>

              <button
                onClick={() => {
                  if (item.submenu) {
                    handleToggle(item.id);
                  } else {
                    onPageChange && onPageChange(item.id);
                    setMobileOpen(false);
                  }
                }}
                className={`
  relative w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300

  ${
    currentPage === item.id
      ? "bg-gradient-to-r from-blue-700 to-purple-800 text-white shadow-lg"
      : "text-slate-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-800"
  }
`}
              >

                <div className={`flex items-center ${collapsed ? "justify-center w-full" : "space-x-3"}`}>
                  <item.icon className="w-5 h-5" />

                  {!collapsed && (
                    <>
                      <span className="font-medium">{item.label}</span>

                      {item.badge && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}

                      {item.count && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-slate-200 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMenu === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Submenu */}
              {!collapsed && item.submenu && openMenu === item.id && (
                <div className="ml-8 mt-2 space-y-2">
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem.id}
                      className="block w-full text-left text-sm text-slate-500 hover:text-blue-600"
                    >
                      {subitem.label}
                    </button>
                  ))}
                </div>
              )}

            </div>
          ))}
        </nav>

        {/* User */}
        <div className='p-4 border-t border-slate-200'>
          <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50'>
            <img
              src={userImg}
              alt="User"
              className='w-10 h-10 rounded-full ring-2 ring-blue-500'
            />

            {!collapsed && (
              <div className='min-w-0'>
                <p className='text-sm font-medium text-slate-800 truncate'>
                  Ram Sharma
                </p>
                <p className='text-xs text-slate-500 truncate'>
                  Administrator
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar