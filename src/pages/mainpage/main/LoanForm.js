import './LoanForm.scss';
import { useEffect, useState } from 'react';
import React from 'react';
import {useNavigate} from "react-router-dom";


const LoanForm = ({isLoggedIn}) => {

    function setSummPartOfRefundSumm(sum) {
        
        setCalculatedSumm(sum.target.value * 1.5);

    };
    const [calculatedSumm, setCalculatedSumm] = useState(0);


    function setDaysPartOfRefundSumm(days) {
        setCalculatedDaysCount(days.target.value * 0.3)

    };
    const [calculatedDaysCount, setCalculatedDaysCount] = useState(0);

    //консты для валидации суммы и кол-ва дней
    const[summ, setSumm] = useState();
    const[daysCount, setDaysCount] = useState('');
    const[summError, setSummError] = useState('');
    const[daysCoutError, setDaysCountError] = useState('');
    const[formValid, setFormValid] = useState(false);

    useEffect(()=>{             //проверка всей формы на валидность для кнопки
        if(summError === "uncorect" || daysCoutError === "uncorect"){
            setFormValid(false)
        }
        else{
            setFormValid(true);
        }

    } , [summError, daysCoutError])

    const summValidation = (e) => {
        setSumm(e.target.value)
        if(!isNaN(e.target.value) && (e.target.value)){
            setSummError("corect");
            setSummPartOfRefundSumm(e)
            
        }
        else {
            setSummError('uncorect')
            setSummPartOfRefundSumm('')
        }
    }

    const dayCountValidation = (e) => {
        setDaysCount(e.target.value)
        if(!isNaN(e.target.value) && (e.target.value) ){
            setDaysCountError("corect")
            setDaysPartOfRefundSumm(e)
        }
        else {
            setDaysCountError('uncorect')
            setDaysPartOfRefundSumm('')
        }
    }

    function onChangeFuncForSumm(e){
        summValidation(e); 
        
    }

    function onChangeFuncForDaysCount(e){
        dayCountValidation(e); 
        
    }

    let navigate = useNavigate();


    function transferToLink(){
        if(isLoggedIn===true){
            navigate("../regp")
        }
        else{
            navigate("../login")
        }
    }


    return (
        <form className="regForm">
            <div className='loanPart'>
                <div className='loanSumm'>
                    <p className='loanSummLabel'>Сумма займа:</p>
                    {<div className={`seterror ${summError}`}>Ошибка ввода</div>}
                    <input
                        onChange={e => { onChangeFuncForSumm(e)}}
                        maxLength = "6"
                        value ={summ}
                        className='loanSummInput'
                        type="text"
                        placeholder="Введитe сумму" 
                        />
                </div>
                <div className='daysCount'>
                    <p className='daysCoutLabel'>Кол-во дней:</p>
                    {(<div className={`seterror ${daysCoutError}`}>Ошибка ввода</div>)}
                    <input
                        onChange={e => { onChangeFuncForDaysCount(e)}}
                        value ={daysCount}
                        maxLength = "6"
                        className='dayCountInput'
                        type="text"
                        placeholder="Введитe дни" 
                        />
                </div>
            </div>
            <div className='refundPart'>
                <p className='refundSummLabel'>Вы вернете:</p>
                <p className='refundSummValue'>
                    {calculatedSumm + calculatedDaysCount}
                </p>
            </div>
            <button 
                className='btn'
                disabled={!formValid}
                onClick={transferToLink}
                >Взять бабосы
            </button>
        </form>
    );
}

export default LoanForm;