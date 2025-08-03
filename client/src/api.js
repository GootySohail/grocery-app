import axios from "axios";

const API_URL = "/api/items";

export const getItems = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addItem = async (item) => {
  const res = await axios.post(API_URL, item);
  return res.data;
};
