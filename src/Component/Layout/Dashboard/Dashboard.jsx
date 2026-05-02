const Dashboard = () => {
  return (
    <div className="-space-y-2 max-w-5xl mx-auto px-6">
      
      {/* Stats */}
      <div className="scale-[0.9] origin-top">
        <StatsGride />
      </div>

      {/* Chart */}
      <div className="scale-[0.92] origin-top">
        <Chart />
      </div>

      {/* Table + Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        
        <div className="xl:col-span-2 min-w-0 scale-[0.92] origin-top">
          <Table />
        </div>

        <div className="min-w-0 scale-[0.92] origin-top">
          <ActivityFeed />
        </div>

      </div>

    </div>
  )
}

export default Dashboard