import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

function List({ listdata }) {
    console.log(listdata);
    return (
        <>
            {
                listdata.map((l, i) => {
                    return (
                        <Card
                            body
                            className="my-2"
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardTitle tag="h5">
                                {l.name}
                            </CardTitle>
                            <CardText>
                                Rs: {l.price} <br />
                                Quantity: {l.qty}
                            </CardText>
                            <Button color="primary">
                                Order
                            </Button>
                        </Card>
                    )
                })
            }
        </>
    );
}

export default List;