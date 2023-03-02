import React from 'react';

function Error(props) {
    return (
        <>
           <p className='error'>{props.errorMsg}</p> 
        </>
    );
}

export default Error;