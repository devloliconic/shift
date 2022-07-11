import { useState } from 'react';

import './MainLoanForm.scss'

const TakeLoanForm = () => {

    const [sliderSummValue, setSliderSummValue] = useState('1000');
    const [sliderDaysValue, setSliderDaysValue] = useState('30');

    const [radioButtonValue, setRadioButtonValue] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    function setSliderValue(slider){
        switch(slider.target.className){
            case 'summ-input' : setSliderSummValue(slider.target.value); break;
            case 'days-input' : setSliderDaysValue(slider.target.value); break;
        }
    }

    function setPackage(){
            if(document.getElementById('social').checked) {
                setRadioButtonValue('Социальный');
                setIsFormValid(true);
            } 
            else if(document.getElementById('bomj').checked){
                setRadioButtonValue('Бомж');
                setIsFormValid(true);   
            }
            else if(document.getElementById('chill').checked){
                setRadioButtonValue('Чилл');
                setIsFormValid(true);
            }
        }
    
    return (
        <form className="form-container">
            <div className='form-container__summ-block form-container__item'>
                <div className='top-text text'>
                    <label>Выберите сумму</label>
                    <label>{sliderSummValue}р</label>
                </div>
                <div className='form-container__slider'>
                            <input 
                            type='range' 
                            onChange={e => {setSliderValue(e)}}
                            className='summ-input' 
                            min='1000' 
                            max='15000'
                            ></input>
                </div>
                <div className='bot-text text'>
                    <label>1000 р</label>
                    <label>15000 р</label>
                </div>
            </div>
            <div className='form-container__days-block form-container__item'>
                <div className='top-text text'>
                    <label>Выберите срок</label>
                    <label>{sliderDaysValue} дней</label>
                </div>
                <div className='form-container__slider'>
                            <input 
                            type='range' 
                            onChange={e => {setSliderValue(e)}}
                            className='days-input' 
                            min='1' 
                            max='30'
                            ></input>
                </div>
                <div className='bot-text text'>
                    <label>1 дней</label>
                    <label>30 дней</label> 
                </div>
            </div>
            <div className='form-container__packages-block form-container__item'>
                <div className='top-text text'>
                    <label>Выберите пакет</label>
                    <label className='package-name'>{radioButtonValue}</label>
                </div>
                <div className='packages-block__item'>
                    <label className='items-label' htmlFor='social'>● Социальный</label>
                    <input type='radio' name = 'pack_name' id='social' value='Социальный' 
                    onChange={e =>{setPackage()}}
                    
                    ></input>
                </div>
                <div className='packages-block__item'>
                    <label className='items-label' htmlFor='bomj'>● Бомж</label>
                    <input type='radio' name = 'pack_name' id='bomj' value='Бомж'
                    onChange={e =>{setPackage()}}
                    ></input>
                </div>
                <div className='packages-block__item'>
                    <label className='items-label' htmlFor='chill'>● Чилл</label>
                    <input type='radio' name = 'pack_name' id='chill' value='Чилл'
                    onChange={e =>{setPackage()}}
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