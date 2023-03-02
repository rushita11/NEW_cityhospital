import React from 'react';
import { Row } from "reactstrap"

function List({ listdata }) {
    return (
        <>
            <Row className='mt-4'>
                {listdata.map((p, i) => {
                    return (
                        <>
                            <div className="col-lg-6" >
                                <div className="member d-flex align-items-start">
                                    {
                                        p.image === undefined ? null : <div className="pic"><img src={p.image} className="img-doctor" alt /></div>
                                    }

                                    <div className="member-info">
                                        <h4>{p.name}</h4>
                                        <span>{p.position}</span>
                                        {
                                            p.price === undefined ? null : <p>Rs: {p.price}</p>
                                        }
                                        {
                                            p.quantity === undefined ? null : <p>Qty: {p.quantity}</p>
                                        }
                                         {
                                            p.expiry === undefined ? null : <p>Expiry: {p.expiry}</p>
                                        }
                                        <p>{p.desc}</p>
                                        {
                                            p.social === undefined ? null : <div className="social">
                                                <a href={p.social.twitter} target="_blank"><i className="ri-twitter-fill" /></a>
                                                <a href={p.social.facebook} target="_blank" ><i className="ri-facebook-fill" /></a>
                                                <a href={p.social.insta} target="_blank"><i className="ri-instagram-fill" /></a>
                                                <a href={p.social.linkin} target="_blank"> <i className="ri-linkedin-box-fill" /> </a>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </>

                    )
                })}
            </Row>
        </>
    );
}

export default List;