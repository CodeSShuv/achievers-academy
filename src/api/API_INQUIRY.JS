import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const submitInquiry = async (inquiryData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/student-applications/add`, inquiryData);
    return response.data;
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    throw error;
  }
};