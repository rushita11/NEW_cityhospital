import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { Form, Formik, useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';



function Patient(props) {
    const [open, setOpen] = React.useState(false);


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name").matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40).required(),
    });


    const formikObj = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {
            setOpen(false)
            console.log(values);
            resetForm();
            // alert(JSON.stringify(values, null, 2));
        },
        validationSchema: schema,
    });

    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, values, touched, setValues, resetForm } = formikObj;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='Text d-flex justify-content-between'>
                <h1>Patient</h1>
                <div className="text-end"><button className='appointment-btn border-0 m-0 ' onClick={handleClickOpen}>Open Modal</button>
                    <Dialog open={open} onClose={handleClose}>
                        <Formik values={formikObj}>
                            <Form onSubmit={handleSubmit}>
                                <DialogTitle>Subscribe</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="Name"
                                        type="text"
                                        value={values.name}
                                        fullWidth
                                        variant="standard"
                                        onChange={e => {
                                            setFieldTouched('name')
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                    />
                                    {errors !== '' && touched.name ? <span>{errors.name}</span> : null}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type="submit">Subscribe</Button>
                                </DialogActions>
                            </Form>
                        </Formik>
                    </Dialog>
                </div>

            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    );
}

export default Patient;