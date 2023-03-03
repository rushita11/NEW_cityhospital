import { getRequest, postRequest } from "../request"

export const fetchAllemployee = () => {
    return getRequest('employee');
}
export const addEmployee = (data) => {
    return postRequest('employee', data);
}