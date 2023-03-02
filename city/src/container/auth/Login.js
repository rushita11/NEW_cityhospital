import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button, FormText, Row, Col } from 'reactstrap';
import Forgetpass from './Forgetpass';
import Signup from './Signup';

function Login(props) {
    const handleData = () => {
        localStorage.setItem("user", 1234);
    }
    return (
        <div>
            <Container>
                <div className='Signup_form'>
                    <h2>Login</h2>
                    <Form>
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

                        <FormGroup>
                            <div className="d-flex align-items-center justify-content-between">
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <NavLink to={'/forgetpass'}>Forget password?</NavLink>
                            </div>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Password "
                                type="password"
                            />
                        </FormGroup>

                        <Button type= "submit" onClick={() => handleData()} className='signup_button appointment-btn ' >
                            Submit
                        </Button>
                    </Form>
                    <div className="create_account_div mt-30">
                        <p>You have account? <NavLink to={'/signup'}>Create an account</NavLink></p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Login;