import React from 'react'
import { useState, useEffect } from 'react'
export const Dashboard = () => {
    const [isloading, setIsloading] = useState(true);
    const [dashboard, setDashboard] = useState(null);

    useEffect(() =>{
        async function fetchdashboard(){
            const response = await fetch('')
            const data = await response.json()
            setDashboard(data)
            setIsloading(false)
        }
        fetchdashboard()
    } ,[])
  return (
    <div>
        <h2>Dashboard</h2>
        <h2>Post - {dashboard.posts}</h2>
    </div>
  )
}
