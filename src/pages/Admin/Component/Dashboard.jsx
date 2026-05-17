import React, {useEffect, useState} from 'react'
import './css/dashboard.css'

const StatCard = ({ icon, label, value, color }) => (
  <div className="stats-card" style={{ borderLeftColor: color }}>
    <div className="stat-icon">{icon}</div>
    <div className="stat-info">
      <span className="stat-value">{value}</span>
      <span className="stats-label">{label}</span>
    </div>
  </div>
)

const Dashboard = () => {
  const stats = [
    { icon: '👥', label: 'Total Students', value: '156', color: '#3498db' },
    { icon: '📚', label: 'Active Courses', value: '12', color: '#2ecc71' },
    { icon: '📝', label: 'Inquiries', value: '48', color: '#f39c12' },
    { icon: '✅', label: 'Admissions', value: '89', color: '#9b59b6' },
  ]

  const recentActivities = [
    // { id: 1, action: 'New student registered', time: '2 mins ago' },
    // { id: 2, action: 'Inquiry received from John Doe', time: '15 mins ago' },
    // { id: 3, action: 'Profile updated for Sarah Smith', time: '1 hour ago' },
    // { id: 4, action: 'New course added: IELTS Prep', time: '3 hours ago' },
  ]

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {recentActivities.map(activity => (
            <div key={activity.id} className="activity-item">
              <span className="activity-action">{activity.action}</span>
              <span className="activity-time">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard