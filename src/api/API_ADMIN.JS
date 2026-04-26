import axios from "axios";

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
    console.log("Running")
    const response = await axios.get(`${API_BASE_URL}/student-applications/view/${profileId}`);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
