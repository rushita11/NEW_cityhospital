import * as ActionTypes from '../ActionTypes'

export const getMedicines = () => (dispatch) => {
    // console.log("action");
    // Exception Handling
    try {
        fetch('http://localhost:3006/medicines')
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionTypes.MEDICINES_GET, payload: data }));
    } catch (error) {

    }
}

export const postMedicines = (data1) => (dispatch) => {
    try {
        fetch('http://localhost:3006/medicines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
        .then((response) => response.json())
        .then((data) => dispatch({type: ActionTypes.MEDICINES_ADD, payload: data}))

    } catch (error) {

    }
}

export const putMedicines = (data) => (dispatch) => {
    try {
        fetch('http://localhost:3006/medicines/' + data.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => dispatch({type: ActionTypes.MEDICINES_UPDATE, payload: data}))
    } catch (error) {

    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        fetch('http://localhost:3006/medicines/' + id, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then(dispatch({type: ActionTypes.MEDICINES_DELETE, payload: id}))
    } catch (error) {

    }
}