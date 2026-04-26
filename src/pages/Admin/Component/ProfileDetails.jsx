import React, { useState,useEffect } from 'react'
import './css/profiledetails.css'
import { fetchProfileDetail } from '../../../api/API_ADMIN.JS'
const ProfileDetails = ({ profileId, onBack }) => {
  const isNew = !profileId
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(
   null
  )

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Profile saved successfully!')
  }
  useEffect(()=>{
    (async()=>{
      let data = await fetchProfileDetail(profileId);
      setFormData(data.data)
    })();
  },[]);
  console.log(formData)
  return (
    
    <div className="profile-details">
      {/* <div className="profile-details-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2>{isNew ? 'Add New Profile' : 'Edit Profile'}</h2>
      </div> */}

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="FullName"
                value={formData?.fullName}
              onChange={handleChange}
              disabled={isEditing}
            />
          </div>
          {/* <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData?.fullName.split(" ")[1]}
              onChange={handleChange}
              disabled={isEditing}
            />
          </div> */}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              disabled={isEditing}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={ parseInt(formData?.mobileNumber)}
              onChange={handleChange}
              disabled={isEditing}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label >Passport Number</label>
             <input
              type="text"
              name="PassportNumber"
              value={formData?.passportNumber}
              onChange={handleChange}
              disabled={isEditing}
            />
            {/* <label>Course</label>
            <select name="course" value={formData?.course} onChange={handleChange}>
              <option value="IELTS">IELTS</option>
              <option value="PTE">PTE</option>
              <option value="TOEFL">TOEFL</option>
              <option value="GRE">GRE</option>
              <option value="SAT">SAT</option>
            </select> */}
          </div>
          <div className="form-group">
            <label ></label>
            {/* <label>Status</label>
            <select name="status" value={formData?.status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select> */}
          </div>
        </div>

        <div className="form-group full-width">
          <label>Notes</label>
          <textarea
            name="notes"
            value={formData?.notes}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">Save Profile</button>
          <button type="button" className="edit-btn" onClick={
            isEditing? 

          }>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileDetails