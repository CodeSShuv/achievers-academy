import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const submitBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/bookings/book`, bookingData);
    return response.data;
  } catch (error) {
    console.error("Error submitting booking:", error);
    throw error;
  }
};

export const getBookings = async () => {
  try{
    const res = await axios.get(`${API_BASE_URL}/bookings/all`);
    return res.data;
  }catch(error){
    console.error("Error fetching bookings:", error);
    throw error;
  }
}