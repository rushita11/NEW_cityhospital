import { getRequest, postRequest } from "../request"

export const fetchAllemployee = () => {
    return getRequest('fetchAllMedicins');
}
export const addEmployee = (data) => {
    return postRequest('employee', data);
}