import { addMedicin, DeleteMedicines, fetchAllMedicins, updateMedicine } from '../../Common/apis/medicine.api';
import *  as ActionType from '../ActionType'

export const getMedicines = () => (dispatch) => {

  try {
    dispatch(isLoading());
    // setTimeout(() => {
    //   fetch('http://localhost:3006/medicines')
    //     .then(response => response.json())
    //     .then((data) => dispatch({ type: ActionType.MEDICINE_GET, payload: data }))
    //     .catch((error) => dispatch(errorMedicine(error.message)));
    // }, 2000);
    setTimeout(() => {
      fetchAllMedicins()
      .then((response) => dispatch({ type: ActionType.MEDICINE_GET, payload: response.data }))
      .catch((error) => dispatch(errorMedicine(error.message)));
    }, 2000)
  } catch (error) {
    dispatch(errorMedicine(error.message))
  }
}

export const postMedicine = (data) => (dispatch) => {
  console.log(data);
  try {
    // dispatch(isLoading());
    // setTimeout(() => {
    //   fetch('http://localhost:3006/medicines', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then(response => response.json())
    //     //  .then((data1) => console.log(data1))
    //     .then((data1) => dispatch({ type: ActionType.MEDICINE_ADD, payload: data1 }))
    //     .catch((error) => dispatch(errorMedicine(error.message)));
    // }, 2000);
    // setTimeout(() => {
      addMedicin(data)
      .then((response) => dispatch({ type: ActionType.MEDICINE_ADD, payload: response.data }))
      .catch((error) => dispatch(errorMedicine(error.message)));
    // }, 2000)


  }
  catch (error) {
    dispatch(errorMedicine(error.message))
  }
}

export const putMedicine = (data) => (dispatch) => {
  console.log(data);
  try {
    // fetch('http://localhost:3006/medicines/' + data.id, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     dispatch({ type: ActionType.MEDICINES_UPDATE, payload: data });
    //   })
    updateMedicine(data)
    .then((response) => dispatch({ type: ActionType.MEDICINES_UPDATE, payload: response.data }))

  }
  catch (error) {

  };
}
export const deleteMedicines = (id) => (dispatch) => {
  dispatch(isLoading());
  try {
    // setTimeout(() => {
    //   fetch('http://localhost:3006/medicines/' + id, {
    //     method: 'DELETE'
    //   })
    //     .then((response) => response.json())
    //     .then(dispatch({ type: ActionType.MEDICINES_DELETE, payload: id }))
    //     .catch((error) => dispatch(errorMedicine(error.message)));
    // }, 2000)

    DeleteMedicines(id)
    .then(dispatch({ type: ActionType.MEDICINES_DELETE, payload: id }))
        .catch((error) => dispatch(errorMedicine(error.message)));


   

  } catch (error) {

  }
}

export const isLoading = () => (dispatch) => {
  dispatch({
    type: ActionType.MEDICINE_LOADING,
    payload: true
  })
}
export const errorMedicine = (err) => (dispatch) => {
  dispatch({
    type: ActionType.MEDICINE_ERROR,
    payload: err
  })
}