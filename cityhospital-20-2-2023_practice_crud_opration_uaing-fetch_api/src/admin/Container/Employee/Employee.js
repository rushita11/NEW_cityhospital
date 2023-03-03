import { Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup'
import { EditLocation, StoreMallDirectorySharp } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeData, deleteEmployee, getEmployeeData, updateEmployee } from '../../../redux/action/employee.action';

function Employee(props) {
    const [open, setOpen] = React.useState(false);
    const [Eid, setEid] = useState();
    const[Dopen, setDOpen] = useState();
    const [dId, setDId] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    const employeeData = useSelector(state => state.employee);
    console.log(employeeData);

    useEffect(() => {
        dispatch(getEmployeeData())
    }, [])
    const StoreData = (values) => {
        // addEmployeeData
        dispatch(addEmployeeData(values));
    }
    const handleUpdateData = (values) => {
        dispatch(updateEmployee(values))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'age', headerName: 'Age', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'action',
            headerName: 'action',
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="delete">
                            <DeleteIcon
                             onClick= {() => {setDId(params.row.id); setDOpen(true)}}
                             />
                        </IconButton>
                        <IconButton aria-label="delete" >
                            <EditIcon onClick={() => { handleUpdate(params.row) }}/>
                        </IconButton>
                    </>
                )
            }
        } 
    ];
    let schema = yup.object().shape({
        name: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40).required("Name is required Field"),
        email: yup.string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "please enter valid email").required("Email is required"),
        age: yup.string().required("age is required Field")
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            email: '',

        },
        validationSchema: schema,
        onSubmit: values => {
            {
                if (Eid) {
                    handleUpdateData(values);
                    resetForm();
                } else {
                    StoreData(values);
                    resetForm();
                }
            }
            setOpen(false)

        },
    });


    const { setFieldTouched, handleSubmit, errors, touched, handleChange, handleBlur, setValues, values, resetForm } = formik;
    const handleUpdate = (value) => {
        setOpen(true)
        setValues(value);
        setEid(value)
    }
    const handleDelete = () => {
        dispatch(deleteEmployee());
        handleClose();
        setDId();
        setDOpen(false);
    }
    const handleDClose = () => {
        setDOpen(false);
    };
    return (
        <>
          <Dialog
                open={Dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure Delete the Data?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDClose}>Disagree</Button>
                    <Button onClick={() => handleDelete()} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <div className='d-flex justify-content-between'>
                <h1>Employee</h1>
                <Button className='appointment-btn' variant="contained" onClick={() => setOpen(true)}>Contained</Button>

                <Dialog open={open} onClose={handleClose}>
                    <Formik values={formik}>
                        <Form className="php-email-form" onSubmit={handleSubmit}>
                        { 
                         Eid ?  <DialogTitle>Update data</DialogTitle> : <DialogTitle>Add Data</DialogTitle> 
                         }
                            <DialogContent>
                                {/* <DialogContentText>
                                
                                </DialogContentText> */}
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Enter Your Name"
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
                                {errors.name !== "" && touched.name ? <span>{errors.name}</span> : null}
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Enter Your Email"
                                    type="email"
                                    value={values.email}
                                    fullWidth
                                    variant="standard"
                                    onChange={e => {
                                        setFieldTouched('email')
                                        handleChange(e)
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors.email !== "" && touched.email ? <span>{errors.email}</span> : null}
                                <TextField
                                    id="age"
                                    name="age"
                                    label="Enter Your age"
                                    type="number"
                                    fullWidth
                                    value={values.age}
                                    variant="standard"
                                    onChange={e => {
                                        setFieldTouched('age')
                                        handleChange(e)
                                    }}
                                    onBlur={handleBlur}
                                />
                                {errors.age !== "" && touched.age ? <span>{errors.age}</span> : null}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">Save</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={employeeData.employee}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </>
    );
}

export default Employee;