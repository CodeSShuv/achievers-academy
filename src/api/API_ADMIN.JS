import axios from "axios";
import BookingForm from './../component/BookingForm';

const API_BASE_URL = "http://localhost:3000/api";

export const fetchApplication = async (inquiryData) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/student-applications/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchProfileDetail = async (profileId) => {
  try {
   
    const response = await axios.get(`${API_BASE_URL}/student-applications/view/${profileId}`);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


export const updateProfileDetails = async (profileId, formData) => {
  try {
    const res = await axios.put(`${API_BASE_URL}/student-applications/update/${profileId}`, formData);
    return res;
  } catch (error) {
    console.error("Error updating data: ", error);
    throw error;
  }
}