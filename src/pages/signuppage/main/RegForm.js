import React, { useEffect, useState } from "react";
import "normalize.css"
import "../signupglobal/SignUpGlobal.scss"
import "./RegForm.scss"
import * as axios from "axios";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import * as Axios from "axios";
import {Form, Formik} from "formik";

function RegForm(props) {
    console.log(props);
    const SignupSchema = Yup.object().shape({
        username: Yup.string().required(),
        surname: Yup.string().required(),
        patronymic: Yup.string().required(),
        seria: Yup.number().integer(),
        number: Yup.number().integer(),
        email: Yup.string().required().email("Неправильная почта"),
        password: Yup.string().required("Заполните"),

    })
    let navigate = useNavigate();



    function transferToUserPage(data, email){
        if(data === email){
            //props.setIsLoggedIn(true)
            navigate("../login");
        }
        else{
            return null;
        }
    }


    function post(values){
        Axios.post("api/auth/sing-up", {}, {params: {email : values.email , password: values.password, name: values.username, surname: values.surname, patronymic: values.patronymic}}).then(response => {
            console.log((response.data));
            const userResult = response.data.email;
            return transferToUserPage(userResult, values.email)
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className='login'>
            <Formik
                initialValues={{
                    username: "",
                    surname: "",
                    patronymic: "",
                    seria: "",
                    number: "",
                    email: "",
                    password: "",

                }}
                validationSchema={SignupSchema}
                validateOnBlur={SignupSchema}
                onSubmit = {values => {post(values)}}
            >
                {({values, errors, handleBlur, isValid, dirty, touched, handleChange, handleSubmit,  isSubmitting}) => (
                    <Form>
                        <h2 className='login__logo'>Регистрация</h2>
                        <p className='login__text'>Имя</p>
                        {errors.username && touched.username  && <p className='login__error'>{errors.username}</p>}
                        <input type="text"
                               name="username"
                               className='login__input'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.username}
                        />
                        <p className='login__text'>Фамилия</p>
                        {errors.surname && touched.surname  && <p className='login__error'>{errors.surname}</p>}
                        <input type="text"
                               name="surname"
                               className='login__input'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.surname}
                        />
                        <p className='login__text'>Отчество</p>
                        {errors.patronymic && touched.patronymic  && <p className='login__error'>{errors.patronymic}</p>}
                        <input type="text"
                               name="patronymic"
                               className='login__input'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.patronymic}
                        />
                        <p className='login__text'>Серия паспорта</p>
                        <input type="text"
                               name="seria"
                               maxlength="4"
                               className='login__input'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.seria}
                        />
                        <p className='login__text'>Номер паспорта</p>
                        <input type="text"
                               name="number"
                               maxLength="6"
                               className='login__input'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.number}
                        />
                        <p className='login__text'>Почта</p>
                        {errors.email && touched.email  && <p className='login__error'>{errors.email}</p>}
                        <input type="email"
                               name="email"
                               className='login__input'
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.email}
                        />
                        <p className='login__text'>Пароль</p>
                        <input
                            type ="password"
                            className='login__input'
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <button type='submit' onClick={handleSubmit} disabled={!isValid} className='login__button'>Войти</button>
                    </Form>
                )}
            </Formik>
        </div>


    );
}
  
export default RegForm;
  