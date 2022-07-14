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
    <div className="form">
        <form>
            <h2 className="form__title">Регистрация</h2>
            <p className="form__label">Имя:</p>
            {(nameDirty && nameError) && <div className="form__error">{nameError}</div>}
            <input
                onChange={e => nameHandler(e)}
                onBlur={e => blurHandler(e)}
                value = {name}
                type="text" 
                name="username" 
                placeholder="Имя" 
                className="form__input"
            />
            <p className="form__label">Фамилия:</p>
            {(surnameDirty && surnameError) && <div className="form__error">{surnameError}</div>}
            <input 
                onChange={e => surnameHandler(e)}
                onBlur={e => blurHandler(e)}
                value = {surname}
                type="text" 
                name="surname" 
                placeholder="Фамилия" 
                className="form__input"
            />
            <p className="form__label">Отчество:</p>
            {(patronymicDirty && patronymicError) && <div className="form__error">{patronymicError}</div>}
            <input 
                onChange={e => patronymicHandler(e)}
                onBlur={e => blurHandler(e)}
                value ={patronymic}
                type="text" 
                name="patronymic" 
                placeholder="Отчество" 
                className="form__input"
            />
            <p className="form__label">Серия паспорта:</p>
            {(seriesDirty && seriesError) && <div className="form__error">{seriesError}</div>}
            <input 
                onBlur={e => blurHandler(e)}
                onChange = {e => seriesHandler(e)}
                value = {series}
                maxLength={4}
                type="text" 
                name="series" 
                placeholder="Серия" 
                className="form__input"
            />
            <p className="form__label">Номер паспорта:</p>
            {(numberDirty && numberError) && <div className="form__error">{numberError}</div>}
            <input 
                onChange={e => numberHandler(e)}
                onBlur={e => blurHandler(e)}
                value ={number}
                maxLength={6}
                type="text" 
                name="number" 
                placeholder="Номер" 
                className="form__input"
            />
            <p className="form__label">Email:</p>
            {(emailDirty && emailError) && <div className="form__error">{emailError}</div>}
            <input 
                onChange={e => emailHandler(e)}
                onBlur={e => blurHandler(e)}
                value = {email}
                type="email" 
                name="email" 
                placeholder="Почта" 
                className="form__input"
            />
            <p className="form__label">Пароль:</p>
            {(passwordDirty && passwordError) && <div className="form__error">{passwordError}</div>}
            <input 
                onChange={e => passwordHandler(e)}
                onBlur={e => blurHandler(e)}
                value = {password}
                type="password" 
                name="pass" 
                placeholder="Пароль" 
                className="form__input"
            />
            <button  onSubmit={(values) => post(values)} className="form__btn">За деньгами!</button>
        </form>
    </div>

    );
}
  
export default RegForm;
  