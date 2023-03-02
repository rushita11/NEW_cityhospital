import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';

function Contact(props) {
    // state that store local data  initally null
    const [formdata, setformdata] = useState(null);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("contact"));

        if (localData !== null) {
            setformdata(localData)
        }
    }, [])
    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name").matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40).min(2)
            .required(),
        email: yup.string().required().email(),
        subject: yup.string().required(),
        message: yup.string().required().max(10, "Allow max 10 character."),
        mobile: yup.string().required("").test("mobile", "Phone number is not valid", value => {
            if (value)
                return value.toString().length === 10
        }),
        password: yup.string().required().min(5, 'Password is too short - should be 8 chars minimum.').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/,
            "Must Contain 5 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
        confpass: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must be match'),
        gender: yup.string().required(),
    });

    const storeContact = (values) => {
        let localData = JSON.parse(localStorage.getItem("contact"));

        console.log(localData);

        if (localData !== null) {
            localData.push(values);
            localStorage.setItem("contact", JSON.stringify(localData))
            // save data into state
            setformdata(localData);
        } else {
            localStorage.setItem("contact", JSON.stringify([values]));
            // save data into state
            setformdata(localData);
        }
    }

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
            mobile: '',
            password: '',
            confpass: '',
            gender: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            storeContact(values);
        },
    });
    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, touched } = formikObj;

    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p> F-505, Inovative Plazza New Delhi, India</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>cityhospital@example.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 9988776655</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <Formik values={formikObj}>
                                <Form className="php-email-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            Su
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                                onChange={e => {
                                                    setFieldTouched('email')
                                                    handleChange(e)
                                                }
                                                }
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.email ? <span>{errors.email}</span> : null}
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="mobile"
                                                id="mobile"
                                                placeholder="Your mobile"
                                                onChange={e => {
                                                    setFieldTouched('mobile')
                                                    handleChange(e)
                                                }
                                                }
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.mobile ? <span>{errors.mobile}</span> : null}
                                            {/* <FormControl> */}

                                        </div>

                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="radio"

                                                name="gender"
                                                onChange={e => {
                                                    setFieldTouched('mobile')
                                                    handleChange(e)
                                                }
                                                }
                                                onBlur={handleBlur}
                                            /> Male
                                            <input
                                                type="radio"
                                                className='ms-3'
                                                name="gender"
                                                onChange={e => {
                                                    setFieldTouched('mobile')
                                                    handleChange(e)
                                                }
                                                }
                                                onBlur={handleBlur}
                                            /> Female
                                            {errors !== '' && touched.gender ? <span className='d-block pt-3'>{errors.gender}</span> : null}
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Your password"
                                                onChange={e => {
                                                    setFieldTouched('password')
                                                    handleChange(e)
                                                }
                                                }
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.password ? <span>{errors.password}</span> : null}
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="confpass"
                                                id="confpass"
                                                placeholder="Your confpass"
                                                onChange={e => {
                                                    setFieldTouched('confpass')
                                                    handleChange(e)
                                                }
                                                }
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.confpass ? <span>{errors.confpass}</span> : null}
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject"
                                            onChange={e => {
                                                setFieldTouched('subject')
                                                handleChange(e)
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        {errors !== '' && touched.subject ? <span>{errors.subject}</span> : null}
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows={5}
                                            placeholder="Message"
                                            onChange={e => {
                                                setFieldTouched('message')
                                                handleChange(e)
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        {errors !== '' && touched.message ? <span>{errors.message}</span> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </Form>
                            </Formik>
                        </div>
                    </div>

                    {
                        formdata !== null ?
                            <>
                                <table border="1" className="dataBorder">
                                    <tbody border="1">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>mobile</th>
                                        <th>Password</th>
                                    </tbody>{
                                        formdata.map((p, i) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{p.name}</td>
                                                        <td>{p.email}</td>
                                                        <td>{p.mobile}</td>
                                                        <td>{p.password}</td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </table>
                            </>
                            : <><div className='dataError'><p className='mb-0'>Not any data</p></div></>
                    }

                </div>

                {/* state data not null -> data display */}


            </section>
        </div>
    );
}

export default Contact;