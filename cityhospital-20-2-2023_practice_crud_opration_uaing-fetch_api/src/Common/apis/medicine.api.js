import { deleteRequest, getRequest, postRequest, putRequest } from "../request"


export const fetchAllMedicins = () => {
    return getRequest('medicines');
}

export const addMedicin = (data) => {
     return postRequest('medicines', data);
}
export const updateMedicine = (data) =>{ 
      return putRequest('medicines/', data);
}
export const DeleteMedicines = (id) => {
    return deleteRequest('medicines/', id);
}