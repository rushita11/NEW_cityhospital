import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function Contact(props) {
    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name").matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
        email: yup.string().required().email(),
        subject: yup.string().required(),
        message: yup.string().required().max(10, "Allow max 10 character."),
        mobile: yup.number().typeError('Please enter valid mobile number.').test("mobile", "Phone number is not valid", value => { if (value) return value.toString().length === 10 }),
        password: yup.string().required('Password is required'),
        confpass: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
        gender: yup.string().required('Please select gender'),
        hobby: yup.array().min(2, 'Atleast 2 hobby').of(yup.string().required()).required()
    });

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
            hobby: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            console.log(values)
        },
    });
    const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, touched } = formikObj;

    console.log(errors);

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
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                                onChange={e => {
                                                    setFieldTouched('name')
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.name ? <span>{errors.name}</span> : null}
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
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your password"
                                                onChange={e => {
                                                    setFieldTouched('password')
                                                    handleChange(e)
                                                }}
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
                                                placeholder="Your confirm password"
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
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name="mobile"
                                                className="form-control"
                                                id="mobile"
                                                placeholder="Your mobile"
                                                onChange={e => {
                                                    setFieldTouched('mobile')
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                            />
                                            {errors !== '' && touched.mobile ? <span>{errors.mobile}</span> : null}
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type={"radio"} name="gender" value={"male"} onChange={e => {
                                                setFieldTouched('mobile')
                                                handleChange(e)
                                            }}
                                                onBlur={handleBlur} />Male
                                            <input type={"radio"} name="gender" value={"female"} onChange={e => {
                                                setFieldTouched('mobile')
                                                handleChange(e)
                                            }}
                                                onBlur={handleBlur} />Female

                                            {errors !== '' && touched.gender ? <span>{errors.gender}</span> : null}
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
                                        Hobby:
                                        <input 
                                        type={"checkbox"} 
                                        name="hobby" 
                                        value={"music"} 
                                        onChange={e => {
                                            setFieldTouched('hobby')
                                            handleChange(e)
                                        }}
                                            onBlur={handleBlur} />Music
                                        <input type={"checkbox"} name="hobby" value={'cricket'} onChange={e => {
                                            setFieldTouched('hobby')
                                            handleChange(e)
                                        }}
                                            onBlur={handleBlur} />Cricket
                                        <input type={"checkbox"} name="hobby" value={'coding'} onChange={e => {
                                            setFieldTouched('hobby')
                                            handleChange(e)
                                        }}
                                            onBlur={handleBlur} />Coding

                                        {errors !== '' && touched.hobby ? <span>{errors.hobby}</span> : null}

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
                </div>
            </section>


        </div>
    );
}

export default Contact;