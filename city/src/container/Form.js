import React from 'react';
import { Container } from 'reactstrap';
import { useState } from 'react';




function Form(props) {
    let emails = document.getElementById("email");
    let names = document.getElementById("name");
    let mobiles = document.getElementById("number");

    const [name, setName] = useState("");
    const [error, setnameError] = useState("");
    const [email, setEmail] = useState("");
    const [erroremail, setemailError] = useState("");
    const [mobile, setMobile] = useState("");
    const [errorMobile, setMobileError] = useState("");
    const [gender, setgender] = useState("");
    const [errorGender, setgenderError] = useState("");

    const validation = () => {
        console.log(name)
        if (name === "") {
            setnameError("Please enter Your name");
            // names.classList.add("error_input");
            // names.classList.remove("success_input");
        }
        else {
            let validName = /^[A-Za-z]+$/;
            if (validName.test(name)) {
                setnameError("");
                // names.classList.add("success_input");
                // names.classList.remove("error_input");
            } else {
                setnameError("Please enter Valid Name");
                // names.classList.add("error_input");
                // names.classList.remove("success_input");
            }
        }
        if (email === "") {
            setemailError("Please enter Your Email");
            // emails.classList.add("error_input");
        } else {
            let validemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (validemail.test(email)) {
                setemailError("");
                // emails.classList.remove("error_input");
                // emails.classList.add("success_input");

            } else {
                setemailError("Please enter valid email");
                // emails.classList.remove("success_input");
                // emails.classList.add("error_input");

            }
        }
        if (mobile === "") {
            setMobileError("Please enter Your Mobile Number");
            // mobiles.classList.add("error_input");
            // mobiles.classList.remove("success_input");
        } else {
            let validnumber = /^\d{10}$/;
            if (validnumber.test(mobile)) {
                setMobileError("");
                // mobiles.classList.add("success_input");
                // mobiles.classList.remove("error_input");
            } else {
                setMobileError("Please enter Valid Mobile Number");
                // mobiles.classList.add("error_input");
                // mobiles.classList.remove("success_input");
            }
        }
        if (gender === "") {
            setgenderError("Please select the Gender");
        }
        else {
            setgenderError("");
        }
    }
    return (
        <>
            <Container>
                <div className='Signup_form'>
                    <form method="post" role="form" className="php-email-form" >
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    onChange={(e) => setName(e.target.value)} />
                                <span class="">{error}</span>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email" id="email"
                                    placeholder="Your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span>{erroremail}</span>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mobile" id="number"
                                    placeholder="Your contact"
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                                <span>{errorMobile}</span>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    type="radio"

                                    name="gender"
                                /> Male
                                <input
                                    type="radio"
                                    className='ms-3'
                                    name="gender"

                                /> Female
                                <span>{errorGender}</span>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                        </div>
                    </form>
                    <div className="text-center "><button onClick={() => validation()} className='appointment-btn mt-3 border-0' >Send Message</button></div>
                </div>
            </Container>
        </>
    );
}

export default Form;