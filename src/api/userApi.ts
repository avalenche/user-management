import axios, { AxiosError } from "axios";

//const API_URL = "https://66e15e4ec831c8811b54b009.mockapi.io/users";

const API_URL = "https://jsonplaceholder.typicode.com/users/";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Download users error: ", error.response?.data);
      throw error.response?.data;
    }
    if (error instanceof Error) {
      console.log("Download userrs error: ", error.message);
      throw error.message;
    }
  }
};
