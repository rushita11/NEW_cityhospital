
import { addEmployee, fetchAllemployee } from '../../Common/apis/employee.api';
import * as ActionType from '../ActionType'
export const getEmployeeData = () => (dispatch) => {
    try {
        //     fetch('http://localhost:3007/employee')
        //         .then(response => response.json())
        //         .then((data) => dispatch({ type: ActionType.EMPLOYEE_GET, payload: data }))
        // }
        fetchAllemployee()
            .then((response) => console.log(response.data))
        // .catch((error) => dispatch(errorMedicine(error.message)));
    }
    catch (error) {

    }
}

export const addEmployeeData = (data) => (dispatch) => {
    try {
        // fetch('http://localhost:3007/employee', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((addData) => {
        //         dispatch({ type: ActionType.EMPLOYEE_ADD, payload: addData })
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        addEmployee(data)
      .then((response) => dispatch({ type: ActionType.EMPLOYEE_ADD, payload: response.data }))
    //   .catch((error) => dispatch(errorMedicine(error.message)));
    } catch (error) {
        // dispatch(errorMedicine(error.message))
    }


}
export const updateEmployee = (data) => (dispatch) => {
    try {
        fetch('http://localhost:3007/employee/' + data.id, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data1) => {
                dispatch({ type: ActionType.EMPLOYEE_UPDATE, payload: data1 })
            })
    }
    catch (error) {

    }

}
export const deleteEmployee = (id) => (dispatch) => {
    try {
        fetch('http://localhost:3007/employee/' + id, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then(dispatch({ type: ActionType.EMPLOYEE_DELETE, payload: id }))

    } catch (error) {

    }
}