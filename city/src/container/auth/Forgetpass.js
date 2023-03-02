import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, FormText, Row, Col } from 'reactstrap';
function Forgetpass(props) {
    return (
        <div>
            <Container>
                <div className='Signup_form'>
                    <h2>Reset your password</h2>
                    <Form>
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

                        <Button className='signup_button appointment-btn ' >
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default Forgetpass;