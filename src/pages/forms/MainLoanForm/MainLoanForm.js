import { useEffect, useState } from 'react';
import TestSlider from './input-range/input-range';
import Slider from './input-range/input-range';

import './MainLoanForm.scss'

const TakeLoanForm = () => {

    const [radioButtonPackageValue, setRadioButtonPackageValue] = useState('');
    const [radioButtonPaymentValue, setRadioButtonPaymentValue] = useState('');

    const [isRadioButtonPackageValid, setIsRadioButtonPackageValid] = useState(false);
    const [isRadioButtonPaymentValid, setIsRadioButtonPaymentValid] = useState(false);

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(()=>{
        //setRadioButtonPackageValue(radioButtonPackageValue);
        //setRadioButtonPaymentValue(radioButtonPaymentValue);
        //setIsRadioButtonPackageValid(true);

        

        console.log("package-name: " + radioButtonPackageValue);
        console.log("payment-name: " + radioButtonPaymentValue);
        console.log("package-active: " + isRadioButtonPackageValid);
        console.log("payment-active: " + isRadioButtonPaymentValid);

        if( isRadioButtonPaymentValid){
            setIsFormValid(true);
            
        }
        console.log(isFormValid);
        },
        [radioButtonPackageValue,radioButtonPaymentValue,
        isRadioButtonPackageValid, isRadioButtonPaymentValid]
    )

    function setPayment(){
        if(document.getElementById('yandex').checked) {
            setRadioButtonPaymentValue('Yandex-Pay'); 
        } 
        else if(document.getElementById('sber').checked){
            setRadioButtonPaymentValue('Sber-Pay');
        }
        else if(document.getElementById('mir').checked){
            setRadioButtonPaymentValue('Mir-Pay');
        }
        setIsRadioButtonPaymentValid(true);
      
    }    
    

    function setPackage(){
            if(document.getElementById('social').checked) {
                setRadioButtonPackageValue('Социальный'); 
            } 
            else if(document.getElementById('bomj').checked){
                setRadioButtonPackageValue('Бомж');
            }
            else if(document.getElementById('chill').checked){
                setRadioButtonPackageValue('Чилл');
            }
            setIsRadioButtonPackageValid(true);
     
        }
    
       

    return (
        <form >
            <div className="form-container">
            <Slider 
            className="form-container__slider form-container__item"
            title="Выберите сумму" 
            defaultValue = '3000'
            units = 'р'
            minValue='3000' 
            maxValue = '30000' 
            />
            <Slider 
            className="form-container__slider form-container__item"
            title="Выберите срок" 
            defaultValue = '50' 
            units = 'дней'
            minValue='1' 
            maxValue ='60' 
            />
            {/* <div className='form-container__packages-block form-container__item'>
                <div className='top-text text'>
                    <label>Выберите пакет</label>
                    <label className='package-name'>{radioButtonPackageValue}</label>
                </div>
                <div className='packages-block__item'>
                    <label className='items-label' htmlFor='social'>● Социальный</label>
                    <input type='radio' name = 'pack_name' id='social' value='Социальный' 
                    onClick={e =>{setPackage()}}
                    ></input>
                </div>
                <div className='packages-block__item'>
                    <label className='items-label' htmlFor='bomj'>● Бомж</label>
                    <input type='radio' name = 'pack_name' id='bomj' value='Бомж'
                    onClick={e =>{setPackage()}}
                    ></input>
                </div>
                <div className='packages-block__item'>
                    <label className='items-label' htmlFor='chill'>● Чилл</label>
                    <input type='radio' name = 'pack_name' id='chill' value='Чилл'
                    onClick={e =>{setPackage()}}
                    ></input>
                </div>
            </div> */}
            <div className='form-container__packages-block form-container__item'>
                <div className='form-container__top-text'>
                    <label className='form-container__item__text__title'>Cпособ получения</label>
                    <label className='form-container__item__text__value'>{radioButtonPaymentValue}</label>
                </div>
                <div className='form-container__packages-block__item'>
                    <label className='form-container__packages-block__item__label' htmlFor='yandex'>● Yandex-Pay</label>
                    <input className='form-container__packages-block__item__input' type='radio' name = 'payment_name' id='yandex' value='Социальный' 
                    onClick={e =>{setPayment()}}
                    ></input>
                </div>
                <div className='form-container__packages-block__item'>
                    <label className='form-container__packages-block__item__label' htmlFor='sber'>● Sber-Pay</label>
                    <input className='form-container__packages-block__item__input'type='radio' name = 'payment_name' id='sber' value='Бомж'
                    onClick={e =>{setPayment()}}
                    ></input>
                </div>
                <div className='form-container__packages-block__item'>
                    <label className='form-container__packages-block__item__label' htmlFor='mir'>● Mir-Pay</label>
                    <input className='form-container__packages-block__item__input' type='radio' name = 'payment_name' id='mir' value='Чилл'
                    onClick={e =>{setPayment()}}
                    ></input>
                </div>
            </div>
            <div className='form-container__button form-container__item'>
            <button className='form-container__button__button' type="submit" disabled={!isFormValid} >Оформить займ</button>
            {/* {(!isRadioButtonPackageValid) && <div className='form-container__error-label'>Выберите пакет!</div>} */}
            {(!isRadioButtonPaymentValid) && <div className='form-container__error-label'>Выберите способ получения!</div>}
            </div>
            
        </div>
        
        </form>
    );
}
  
  export default TakeLoanForm;