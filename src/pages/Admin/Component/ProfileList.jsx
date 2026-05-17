import React, { useEffect,useState } from 'react'
import './css/profilelist.css'
import { fetchApplication } from '../../../api/API_ADMIN.JS'

const ProfileList = ({ onViewProfile }) => {
  const [profiles, setProfiles]= useState([]);
  // const profiles = [
  //   { id: 1, name: 'John Doe', email: 'john@example.com', course: 'IELTS', status: 'Active' },
  //   { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', course: 'PTE', status: 'Active' },
  //   { id: 3, name: 'Mike Johnson', email: 'mike@example.com', course: 'TOEFL', status: 'Pending' },
  //   { id: 4, name: 'Emily Brown', email: 'emily@example.com', course: 'GRE', status: 'Active' },
  //   { id: 5, name: 'David Wilson', email: 'david@example.com', course: 'SAT', status: 'Inactive' },
  // ]


  useEffect(()=>{

      (async ()=>{
        let data = await fetchApplication();
        setProfiles(data);
      })();
  },[])
  console.log(profiles);
  return (
    <div className="profile-list">
      <div className="profile-header">
        <h2>Student Profiles</h2>
      </div>
      
      <table className="profile-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr key={profile._id}>
              <td>{profile._id}</td>
              <td>{profile.fullName}</td>
              <td>{profile.email}</td>
              <td>{profile.mobileNo}</td>
              
              <td>
                {/* <span className={`status-badge ${profile.status.toLowerCase()}`}>
                  {profile.status}
                </span> */}
              </td>
              <td>
                <button 
                  className="action-btn view"
                  onClick={() => onViewProfile(profile._id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProfileList