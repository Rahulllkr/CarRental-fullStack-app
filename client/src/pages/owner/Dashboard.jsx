import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'

const Dashboard = () => {
    const [data,setData] = useState({
        totalCars:0,
        totalBookings:0,
        pendingBookings:0,
        completeBookings:0,
        recentBookings:[],
        monthlyRevenue:0
    })

    const dashboardCards = [
        {title:"Total Cars", value:data.totalCars, icon:assets.carIconColored},
        {title:"Total Bookings", value:data.totalBookings, icon:assets.listIconColored},
        {title:"Pending", value:data.pendingBookings, icon:assets.cautionIconColored},
        {title:"Confirmed", value:data.completeBookings, icon:assets.listIconColored}
    ]

    useEffect(() => {
        setData(dummyDashboardData)
    },[])

  return (
    <div></div>
  )
}

export default Dashboard