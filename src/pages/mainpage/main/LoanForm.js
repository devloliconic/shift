import './LoanForm.scss';
import { useEffect, useState } from 'react';
import React from 'react';


const LoanForm = () => {

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
    const[daysCount, setDaysCount] = useState();
    const[summError, setSummError] = useState('ошибка суммы');
    const[daysCoutError, setDaysCountError] = useState('ошибка дней');
    const[formValid, setFormValid] = useState(false);

    useEffect(()=>{             //проверка всей формы на валидность для кнопки
        if(summError || daysCoutError){
            setFormValid(false)
        }
        else{
            setFormValid(true);
        }

    } , [summError, daysCoutError])

    const summValidation = (e) => {
        setSumm(e.target.value)
        if(!isNaN(e.target.value) && (e.target.value)){
            setSummError(false);
            setSummPartOfRefundSumm(e)
            
        }
        else {
            setSummError('некорректная сумма')
            setSummPartOfRefundSumm('')
        }
    }

    const dayCountValidation = (e) => {
        setDaysCount(e.target.value)
        if(!isNaN(e.target.value) && (e.target.value) ){
            setDaysCountError("")
            setDaysPartOfRefundSumm(e)
        }
        else {
            setDaysCountError('некорректное кол-во дней')
            setDaysPartOfRefundSumm('')
        }
    }

    function onChangeFuncForSumm(e){
        summValidation(e); 
        
    }

    function onChangeFuncForDaysCount(e){
        dayCountValidation(e); 
        
    }

    return (
        <form className="regForm">
            <div className='loanPart'>
                <div className='loanSumm'>
                    <p className='loanSummLabel'>Сумма займа:</p>
                    {(summError) && <div className='errorText' style={{color: 'red'}}>{summError}</div>}
                    <input
                        onChange={e => { onChangeFuncForSumm(e)}}
                        value ={summ}
                        className='loanSummInput'
                        type="text"
                        placeholder="Введитe сумму" 
                        />
                </div>
                <div className='daysCount'>
                    <p className='daysCoutLabel'>Кол-во дней</p>
                    {((daysCoutError) && <div className='errorText' style={{color: 'red'}}>{daysCoutError}</div>)}
                    <input
                        onChange={e => { onChangeFuncForDaysCount(e)}}
                        value ={daysCount}
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
                disabled={!formValid}
                type='submit'>Взять бабосы
            </button>
        </form>
    );
}

export default LoanForm;