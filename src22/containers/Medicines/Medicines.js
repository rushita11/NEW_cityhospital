import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import List from '../../components/List/List';
import { getMedicines } from '../../redux/action/medicines.action';

const data = [
    {
        id: 101,
        name: 'abc',
        price: 120,
        qty: 500
    },
    {
        id: 102,
        name: 'pqr',
        price: 300,
        qty: 1000
    },
    {
        id: 103,
        name: 'mnp',
        price: 50,
        qty: 80
    },
    {
        id: 104,
        name: 'bcd',
        price: 200,
        qty: 5000
    },
    {
        id: 105,
        name: 'qrn',
        price: 60,
        qty: 320
    },
]
function Medicines(props) {
    

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Medicines</h2>
                </div>

                <List listdata={data} />
            </div>
        </section>

    );
}

export default Medicines;