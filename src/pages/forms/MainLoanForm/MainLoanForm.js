import { useEffect, useState } from 'react';
import TestSlider from './input-range/input-range';
import Slider from './input-range/input-range';

import './MainLoanForm.scss'

const TakeLoanForm = () => {

    const [radioButtonValue, setRadioButtonValue] = useState('');

    const [isRadioButtonPackageValid, setIsRadioButtonPackageValid] = useState(false);
    

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(()=>{
        setRadioButtonValue(radioButtonValue);
        setIsRadioButtonPackageValid(true);
        console.log("package-name: " + radioButtonValue);
        console.log("package-active: " + isRadioButtonPackageValid);
        },
        [radioButtonValue,isRadioButtonPackageValid]
    )

    

    function setPackage(){
            if(document.getElementById('social').checked) {
                setRadioButtonValue('Социальный'); 
            } 
            else if(document.getElementById('bomj').checked){
                setRadioButtonValue('Бомж');
            }
            else if(document.getElementById('chill').checked){
                setRadioButtonValue('Чилл');
            }
            
            formValidation();
        }
    
        function formValidation(){
                if(isRadioButtonPackageValid){
                    setIsFormValid(true);
                }
        }

    return (
        <form className="form-container">
            <Slider 
            title="Выберите сумму" 
            defaultValue = '3000'
            units = 'р'
            minValue='3000' 
            maxValue = '30000' 
            />
            <Slider 
            title="Выберите срок" 
            defaultValue = '50' 
            units = 'дней'
            minValue='1' 
            maxValue ='60' 
            />
            <div className='form-container__packages-block form-container__item'>
                <div className='top-text text'>
                    <label>Выберите пакет</label>
                    <label className='package-name'>{radioButtonValue}</label>
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
            </div>
            <button className='form-container__button' type="submit" disabled={!isFormValid} >Here Comes the Money!</button>
            {(!isFormValid) && <div className='form-container__error-label'>Выберите пакет!</div>}
            {/* <label className='form-container__error-label'>Выберите пакет!</label> */}
        </form>
    );
}
  
  export default TakeLoanForm;