import { Button } from '@mui/material';
import React from 'react';

function Employee(props) {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <h1>Employee</h1>
                <Button variant="contained">Add Employee</Button>
            </div>
        </>
    );
}

export default Employee;