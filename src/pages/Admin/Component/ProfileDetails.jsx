import React, { useState, useEffect } from 'react'
import './css/profiledetails.css'
import { fetchProfileDetail } from '../../../api/API_ADMIN.JS'
import { updateProfileDetails } from '../../../api/API_ADMIN.JS'

const QUALIFICATION_OPTIONS = [
  "SEE", "+2", "Diploma", "A Levels", "Bachelor", "Master", "PhD", "Other"
]

const COUNTRY_OPTIONS = [
  "Australia", "Canada", "USA", "UK", "New Zealand", "Japan", "South Korea", "Germany", "Other"
]

const COURSE_OPTIONS = [
  "Information Technology", "Business Studies", "Nursing", "Engineering",
  "Hospitality", "Data Science", "Cyber Security", "Business Management", "Other"
]

const MARITAL_STATUS_OPTIONS = ["Single", "Married", "Divorced", "Widowed"]

const ProfileDetails = ({ profileId, onBack }) => {
  const isNew = !profileId
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    passportNumber: '',
    qualification: '',
    collegeName: '',
    result: '',
    passedYear: '',
    maritalStatus: '',
    address: '',
    mobileNo: '',
    email: '',
    country: '',
    courses: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCourseChange = (course) => {
    setFormData(prev => {
      const courses = prev.courses.includes(course)
        ? prev.courses.filter(c => c !== course)
        : [...prev.courses, course]
      return { ...prev, courses }
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      setLoading(true);
      let res = await updateProfileDetails(profileId, formData);
      alert(res?.data?.message || "Profile updated successfully!");
      setLoading(false);
    }catch(e){
      alert(e.response?.data?.message || e.message || "Error updating profile");
      setLoading(false);
    }
    setIsEditing(false);
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  useEffect(() => {
    if (profileId) {
      setLoading(true);
      (async () => {
        let data = await fetchProfileDetail(profileId);
        if (data?.data) {
          // Format date for input field
          console.log(data.data);
          const formattedData = { ...data.data }
          if (formattedData.dateOfBirth) {
            formattedData.dateOfBirth = new Date(formattedData.dateOfBirth).toISOString().split('T')[0]
          }
          setFormData(formattedData)
        }
        setLoading(false);
      })();
    }
  }, [profileId]);

  if (loading) {
    return <div className="profile-details">Loading...</div>
  }

  return (
    <div className="profile-details">
      <form onSubmit={handleSubmit} className="profile-form">
        {/* Personal Information */}
        <h3>Personal Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData?.fullName || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData?.dateOfBirth || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Passport Number</label>
            <input
              type="text"
              name="passportNumber"
              value={formData?.passportNumber || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Marital Status</label>
            <select
              name="maritalStatus"
              value={formData?.maritalStatus || ''}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Status</option>
              {MARITAL_STATUS_OPTIONS.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <textarea
            name="address"
            value={formData?.address || ''}
            onChange={handleChange}
            disabled={!isEditing}
            rows="2"
          />
        </div>

        {/* Contact Information */}
        <h3>Contact Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData?.email || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobileNo"
              value={formData?.mobileNo || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Academic Qualification */}
        <h3>Academic Qualification</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Qualification</label>
            <select
              name="qualification"
              value={formData?.qualification || ''}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Qualification</option>
              {QUALIFICATION_OPTIONS.map(q => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>College Name</label>
            <input
              type="text"
              name="collegeName"
              value={formData?.collegeName || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Result</label>
            <input
              type="text"
              name="result"
              value={formData?.result  || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Passed Year</label>
            <input
              type="number"
              name="passedYear"
              value={formData?.passedYear || ''}
              onChange={handleChange}
              disabled={!isEditing}
              min="1950"
              max={new Date().getFullYear()}
            />
          </div>
        </div>

        {/* Study Preferences */}
        <h3>Study Preferences</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Country</label>
            <select
              name="country"
              value={formData?.country || ''}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Select Country</option>
              {COUNTRY_OPTIONS.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Courses</label>
          <div className="checkbox-group">
              <label  className="checkbox-label">
               Courses
              </label>
              <select name="courses"
              value={formData.courses}
              onChange={handleChange}
              disabled= {!isEditing} >
            {COURSE_OPTIONS.map(course => (
                <option key={course} value={course}>{course}</option>
              
            ))}
            </select>
          </div>
        </div>

        <div className="form-actions">
          {isEditing && <button type="submit" className="save-btn">Save Profile</button>}
          <button type="button" className="edit-btn" onClick={toggleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileDetails