import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useQuery } from "react-query";

import "normalize.css"
import "./loginglobal/LoginGlobal.scss"
import HeaderTop from "./header/LoginHeader"
import Footer from "./footer/LoginFooter"
import Main from "./main/LoginMain"


const LoginPage = () => {
    
    

    const SignupSchema = Yup.object().shape({
      email: Yup.string().email("Неправильная почта"),
      password: Yup.string(),
    })
    return (
      <div className='login'>
        <Formik
          initialValues={{
            email: " ",
            password: " ",
          }}
          validationSchema={SignupSchema}
          validateOnBlur={SignupSchema}
          onSubmit = {values => {console.log(values);}}
        >
          {({values, errors, handleBlur, isValid, dirty, touched, handleChange, handleSubmit,  isSubmitting}) => (
            <Form>
              <h2 className='login__logo'>Вход</h2>
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
              <button type='submit' onClick={e=>(handleSubmit)} disabled={!isValid || isSubmitting} className='login__button'>Войти</button>
            </Form>
          )}
        </Formik>
      </div>

      
    );
  }
  
  export default LoginPage;