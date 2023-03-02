import { CloseOutlined } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Form, Formik, useFormik } from 'formik';
import React from 'react';

import * as yup from 'yup';



const MedicineModal = ({ open, handleClose }) => {
    // const [error, setnameError] = useState("");

    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name").matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40).min(2)
            .required(),
        price: yup.string().required("price is required"),
        quantity: yup.string().required("quantity is required"),

    });
    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: ''
        },
        validationSchema: schema,
        onSubmit: values => {
        },
    });

    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, touched } = formikObj;
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Medicine</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Enter Medicine Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={e => {
                                setFieldTouched('name')
                                handleChange(e)
                            }}
                            onBlur={handleBlur}
                        />
                        {errors !== '' && touched.name ? <span>{errors.name}</span> : null}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="price"
                            label="Enter Price"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={e => {
                                setFieldTouched('price')
                                handleChange(e)
                            }}
                            onBlur={handleBlur}
                        />
                        {errors !== '' && touched.name ? <span>{errors.price}</span> : null}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="quantity"
                            label="Enter Quantity"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={e => {
                                setFieldTouched('quantity')
                                handleChange(e)
                            }}
                            onBlur={handleBlur}
                        />
                        {errors !== '' && touched.quantity ? <span>{errors.quantity}</span> : null}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Modal>

        </div>
    )
}

export default MedicineModal