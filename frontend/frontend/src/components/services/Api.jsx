import axios from "axios";

const uri = "http://localhost:8181";
const authHeader = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${authHeader}`,
  "Content-Type": "application/json",
};

export const Login = async (formData) => {
  try {
    const response = await axios.post(`${uri}/api/v1/auth/login`, formData);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (data) => {
    axios.post(`${uri}/api/v1/auth/register`, data);
};


export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${uri}/api/v1/event/get`, {
      headers
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${uri}/api/v1/event/create`, eventData, {
      headers,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (eventId, eventData) => {
  try {
    const response = await axios.put(
      `${uri}/api/v1/event/updateById/${eventId}`,
      eventData, { headers }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(
      `${uri}/api/v1/event/deleteById/${eventId}`, { headers }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
