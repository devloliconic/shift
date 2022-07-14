import React from 'react';
import {withRouter} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as Axios from "axios";


import "normalize.css"
import "./loginglobal/LoginGlobal.scss"
import HeaderTop from "./header/LoginHeader"
import Footer from "./footer/LoginFooter"
import Main from "./main/LoginMain"
import axios from "axios";


const LoginPage = (props) => {
    console.log(props);
    const SignupSchema = Yup.object().shape({
      email: Yup.string().email("Неправильная почта"),
      password: Yup.string(),
    })
    let navigate = useNavigate();



    function transferToUserPage(data, email){
        if(data === email){
            props.setIsLoggedIn(true)
            navigate("../user");
        }
        else{
            return null;
        }
    }


    function post(values){
        Axios.post("api/auth/sing-in", {}, {params: {email : values.email , password: values.password}}).then(response => {
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
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          validateOnBlur={SignupSchema}
          onSubmit = {values => {post(values)}}
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
              <button type='submit' onClick={handleSubmit} disabled={!isValid} className='login__button'>Войти</button>
            </Form>
          )}
        </Formik>
      </div>

      
    );
  }
  
  export default LoginPage;
  