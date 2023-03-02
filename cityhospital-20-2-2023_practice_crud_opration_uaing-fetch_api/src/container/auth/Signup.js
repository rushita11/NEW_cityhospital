import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button, FormText, Row, Col } from 'reactstrap';
import Login from './Login';
function Signup(props) {
    return (
        <div>
            <Container>
                <div className='Signup_form'>
                    <h2>Signup</h2>
                    <Form>
                        <Row>
                            <Col xs lg="6">
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Enter Your name"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs lg="6">
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs lg="6">
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Password "
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs lg="6">
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        Select Your Country
                                    </Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                            India
                                        </option>
                                        <option>
                                            chaina
                                        </option>
                                        <option>
                                            Pakistan
                                        </option>
                                        <option>
                                            Nepal
                                        </option>

                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleText">
                                Message
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                            />
                        </FormGroup>

                        <FormGroup tag="fieldset">
                            <legend>
                                Select Gender
                            </legend>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Male
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Female
                                </Label>
                            </FormGroup>

                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                                You Agree to our terms and Policy.
                            </Label>
                        </FormGroup>
                        <Button className='signup_button appointment-btn ' >
                            Submit
                        </Button>
                    </Form>
                    <div className="create_account_div mt-30">
                        <p>You have account? <NavLink to={'/login'}>Login Account</NavLink></p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Signup;