import axios from "axios";
const baseURL = process.env.REACT_APP_URL_API_LOCAL;

const app = axios.create({
    baseURL,
    withCredentials: true,
})

export default app