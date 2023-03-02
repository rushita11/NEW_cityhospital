import { EditLocation } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import * as yup from 'yup';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';


function Do(props) {
    const [open, setOpen] = React.useState(false);
    const [doData, setDoData] = useState([]);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // column fot the table.
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'action',
            headerName: 'action',
            renderCell: (params) => {
                return (
                    <>
                    {/* icon for the delete and edit */}
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    // validate the form filed using formik anf yup required the download and import yup and formik. 
    
    // when form validation using the formik form and Formik import from formik is required.
    let schema = yup.object().shape({
        name: yup.string().required().matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
        email: yup.string().required(),
    });
    const storeDoData = (values) => {
        // data store in local and add condition for check data already store. If data already store then new data push in current data. If not available any data make new key and store the current data.
        let localDoData = JSON.parse(localStorage.getItem("doctor"));
        // generatet random ID
        let idData = Math.round(Math.random() * 1000);

        // destructring the data
        let doData = { ...values, id: idData }
        if (localDoData !== null) {
            localDoData.push(doData)
            localStorage.setItem("doctor", JSON.stringify(localDoData))
            setDoData(localDoData)
        }

        // when not any data the new data set in localstorage.
        else {
            localStorage.setItem("doctor", JSON.stringify([doData]));
            setDoData(doData);
        }

    }
    console.log(doData);

    // make a formik object
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },

        // that is required for showing the error
        validationSchema: schema,
        onSubmit: values => {
            console.log(values)
            setOpen(false)
            storeDoData(values)
        },
    });
    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, touched, } = formik  // destructoing the formik method
    return (
        <>
            <div className='Text d-flex justify-content-between'>
                <h1>Doctor</h1>
                <div className="text-end"><Button className="appointment-btn border-0 m-0" onClick={() => handleClickOpen()}>open Modal</Button></div>
                <Dialog open={open} onClose={() => handleClose()}>
                    <Formik values={formik} >
                        <Form onSubmit={handleSubmit}>
                            <DialogTitle>Add Doctor</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Please enter You name"
                                    type="text"
                                    name="name"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        handleChange(e)
                                        setFieldTouched('name')
                                    }}
                                    onBlur={() => handleBlur()}
                                />
                                {errors !== " " && touched.name ? <span>{errors.name}</span> : null}
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Please enter You email"
                                    type="email"
                                    name="email"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        handleChange(e)
                                        setFieldTouched('email')
                                    }}
                                    onBlur={() => handleBlur()}
                                />
                                {errors !== " " && touched.email ? <span>{errors.email}</span> : null}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => handleClose()}>Cancel</Button>
                                <Button type="submit">Submit</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>
            </div>

            {/* Data showing in the table.  */}
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                // state data show in row
                    rows={doData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    );
}

export default Do;