import axios from "axios";

const PORT = import.meta.env.DEV ? `${import.meta.env.VITE_HOST}/admin` : `${location.hostname}/admin`;
console.log(PORT);

const instance = axios.create({
    baseURL: PORT,
})

export default instance;