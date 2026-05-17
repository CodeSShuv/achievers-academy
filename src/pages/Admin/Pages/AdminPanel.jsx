import React, { useState } from 'react'
import Dashboard from '../Component/Dashboard'
import ProfileList from '../Component/ProfileList'
import ProfileDetails from '../Component/ProfileDetails'
// import BookingsList from '../Component/BookingList'
import './css/adminpanel.css'
import BookingsList from './../Component/BookingList';

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentView, setCurrentView] = useState('dashboard')
  const [selectedProfileId, setSelectedProfileId] = useState(null)

  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'profiles', icon: '👥', label: 'Profiles' },
    {id:'bookings', label:"Bookings"}
    // { id: 'addProfile', icon: '➕', label: 'Add Profile' },
  ]

  const handleNavClick = (viewId) => {
    setCurrentView(viewId)
    if (viewId !== 'profileDetails') {
      setSelectedProfileId(null)
    }
  }

  const handleViewProfile = (id) => {
    setSelectedProfileId(id);
    setCurrentView('profileDetails');
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'profiles':
        return <ProfileList onViewProfile={handleViewProfile} />
      case 'profileDetails':
        return <ProfileDetails profileId={selectedProfileId} onBack={() => setCurrentView('profiles')} />
     
      case 'bookings':
        return <BookingsList/>
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button id='sidebar-btn'
            style={{
              border:"none",
              marginTop:"1rem",
              width:'100%',
              background:"transparent",
              color:"#bdc3c7",   
              textAlign:"left",
              padding:"1rem"           
            }}
              key={item.id}
              className={`nav-item ${currentView === item.id || (currentView === 'profileDetails' && item.id === 'profiles') ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>Achievers Academy</h1>
          <div className="admin-user">
            <span>Admin</span>
            <button className="logout-btn">Logout</button>
          </div>
        </header>
        <div className="admin-content">
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

export default AdminPanel