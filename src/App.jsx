import React, { useState } from 'react'
import Sidebar from './Component/Layout/Sidebar'
import Header from './Component/Layout/Header'
import StatsGrid from './Component/Layout/Dashboard/StatsGride'
import Chart from './Component/Layout/Dashboard/Chart'
import Table from './Component/Layout/Dashboard/Table'
import ActivityFeed from './Component/Layout/Dashboard/ActivityFeed'

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
      
      <div className='flex min-h-screen'>
        
        {/* Sidebar */}
        <Sidebar 
          collapsed={sidebarCollapsed}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* Right Side */}
        <div
          className={`
            flex-1 flex flex-col min-w-0
            overflow-x-hidden overflow-y-auto
            transition-all duration-300
            ${sidebarCollapsed ? "lg:ml-24" : "lg:ml-72"}
          `}
        >
          
          {/* Header */}
          <Header 
            onToggleSidebar={() => setMobileOpen(!mobileOpen)} 
          />

          {/* Main */}
          <main className="flex-1 p-4 sm:p-6 pt-20">

            {currentPage === "dashboard" && (
              <>
                <StatsGrid />
                <Chart />
                <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
                  <div className='xl:col-span-2 min-w-0'>
                    <Table/>
                  </div>
                  <div className='min-w-0'>
                    <ActivityFeed/>
                  </div>
                </div>
              </>
            )}

            {currentPage === "users" && (
              <h1 className="text-2xl font-bold">Users Page</h1>
            )}

            {currentPage === "analytics" && (
              <h1 className="text-2xl font-bold">Analytics Page</h1>
            )}

          </main>

        </div>
      </div>
    </div>
  )
}

export default App