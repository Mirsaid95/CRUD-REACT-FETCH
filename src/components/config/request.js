import axios from "axios";

const request = axios.create({baseURL: import.meta.env.VITE_APP_URL});


request.interceptors.response.use((res) => {
    if (res.status === 401 ) {
        window.location.pathname = '/login';
    }
    return res;
})

export {request};