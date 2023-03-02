import axios from 'axios';
import { BASE_URL } from '../utils/baseURL';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000
});

export const sendRequest = (config) => {
    return axiosInstance.request(config);
}
export const getRequest = (params) => {
    return sendRequest({
        method: "get",
        url: params
    })
}
export const postRequest = (path, data) => {
    console.log(data)
    return sendRequest({
        method: 'post',
        url: path,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const putRequest = (path, data) => {
    return sendRequest({
        method: 'put',
        url: path + data.id,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const deleteRequest = (path, id) => {
    return sendRequest({
        method: 'delete',
        url: path + id,
    })
}