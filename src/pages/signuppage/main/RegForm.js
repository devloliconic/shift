import React, { useEffect, useState } from "react";
import "normalize.css"
import "../signupglobal/SignUpGlobal.scss"
import "./RegForm.scss"
import * as axios from "axios";

function RegForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [series, setSeries] = useState('');
    const [number, setNumber] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [patronymicDirty, setPatronymicDirty] = useState(false);
    const [seriesDirty, setSeriesDirty] = useState(false);
    const [numberDirty, setNumberDirty] = useState(false);
    const [numberError, setNumberError] = useState('Номер не может быть пустым');
    const [seriesError, setSeriesError] = useState('Серия не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [surnameError, setSurnameError] = useState('Фамилия не может быть пустым');
    const [patronymicError, setPatronymicError] = useState('Отчество не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [formValid, setFormValid] = useState(false)





    useEffect( () =>{
        if(emailError || passwordError || nameError || surnameError || patronymicError || seriesError || numberError){
            setFormValid(false);
        }
        else{
            setFormValid(true);
        }
    }, [emailError, passwordError, nameError, surnameError, patronymicError, seriesError, numberError])

    const nameHandler = (e) =>{
        setName(e.target.value);
        const reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        if(!reg.test(String(e.target.value))){
            setNameError("Некорректное имя");
        }
        else{
            setNameError('');
        }
    }

    const patronymicHandler = (e) =>{
        setPatronymic(e.target.value);
        const reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        if(!reg.test(String(e.target.value))){
            setPatronymicError("Некорректное отчество");
        }
        else{
            setPatronymicError('');
        }
    }

    const surnameHandler = (e) =>{
        setSurname(e.target.value);
        const reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        if(!reg.test(String(e.target.value))){
            setSurnameError("Некорректная Фамилия");
        }
        else{
            setSurnameError('');
        }
    }

    
    const seriesHandler = (e) =>{
        setSeries(e.target.value);
        const reg = /^([0-9]{2}[0-9]{2})?$/;
        if(!reg.test(String(e.target.value))){
            setSeriesError("Некорректная серия");
        }
        else{
            setSeriesError('');
        }
    }


    const numberHandler = (e) =>{
        setNumber(e.target.value);
        const reg = /^([0-9]{6})?$/;
        if(!reg.test(String(e.target.value))){
            setNumberError("Некорректный номер");
        }
        else{
            setNumberError('');
        }
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError("Некорректный Email");
        }
        else{
            setEmailError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 6 ){
            setPasswordError("Пароль должен быть длиннее 6-ти символов");
            if(!e.target.value){
                setPasswordError("Пароль не может быть пустым");
            }
        }
        else{
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true);
                break;
            case 'pass':
                setPasswordDirty(true);
                break;
            case 'username':
                setNameDirty(true);
                break;
            case "surname":
                setSurnameDirty(true);
                break;
            case "patronymic":
                setPatronymicDirty(true);
            case "series":
                setSeriesDirty(true);
            case "number":
                setNumberDirty(true);
        }
    }
    function post(email, name, surname, patronymic,password){
        const values = {
            email: email,
            name: name,
            surname: surname,
            patronymic: patronymic,
            password: password
        }
        axios.post("/api/auth/sing-up", {} ,{params:{email: values.email,password: values.password,surname: values.surname, patronymic:values.patronymic, name: values.name}}).then(response => {
            console.log((response.data));
            debugger;
        }).catch((error) => {
            console.log(error);
            debugger;
        })

    }
    function chek(values){
        console.log(values);
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
            <button  onClick={({values}) => post(values)} className="form__btn">За деньгами!</button>
        </form>
    </div>

    );
  }
  
export default RegForm;
  