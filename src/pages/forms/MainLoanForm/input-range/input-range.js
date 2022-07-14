import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import './inpit-range.scss'

export default function Slider(props) {

    const [sliderValue, setSliderValue] = useState('');

    function setRangeInput(slider){
         setSliderValue(slider.target.value); console.log(sliderValue);
    }
  return (
    <div 
    className={props.className}
                >  {/* форма со слайдером*/}
                <div className='form-container__top-text text'>
                    <label className='form-container__slider-title'>{props.title}</label>
                    {(sliderValue!='') && <label className='form-container__slider-value'>{sliderValue} {props.units}</label>}
                    {(sliderValue =='') && <label className='form-container__slider-value'>{props.defaultValue} {props.units}</label>}
                </div>
                <div className='form-container__range-input'>
                            <input 
                            type='range' 
                            onChange={e => {setRangeInput(e)}}
                            className='summ-input' 
                            min={props.minValue}
                            max={props.maxValue}
                            ></input>
                </div>
                <div className='form-container__bot-text text'>
                    <label className='form-container__min-value'>{props.minValue}</label>
                    <label className='form-container__max-value'>{props.maxValue}</label>
                </div>
            </div>
  )
}



// export default function TestSlider(props){


//     const [sliderSummValue, setSliderSummValue] = useState('1000');
//     const [sliderDaysValue, setSliderDaysValue] = useState('30');

//     const [radioButtonValue, setRadioButtonValue] = useState('');

//     const [isRadioButtonPackageValid, setIsRadioButtonPackageValid] = useState(false);
    

//     const [isFormValid, setIsFormValid] = useState(false);

//     useEffect(()=>{
//         setRadioButtonValue(radioButtonValue);
//         setIsRadioButtonPackageValid(true);
//         console.log("package-name: " + radioButtonValue);
//         console.log("package-active: " + isRadioButtonPackageValid);
//         },
//         [radioButtonValue,isRadioButtonPackageValid]
//     )

//     function setSliderValue(slider){
//         switch(slider.target.className){
//             case 'summ-input' : setSliderSummValue(slider.target.value); console.log(sliderSummValue); break;
//             case 'days-input' : setSliderDaysValue(slider.target.value); console.log(sliderDaysValue); break;
//         }
//     }

//     function setPackage(){
//             if(document.getElementById('social').checked) {
//                 setRadioButtonValue('Социальный'); 
//             } 
//             else if(document.getElementById('bomj').checked){
//                 setRadioButtonValue('Бомж');
//             }
//             else if(document.getElementById('chill').checked){
//                 setRadioButtonValue('Чилл');
//             }
            
//             formValidation();
//         }
    
//         function formValidation(){
//                 if(isRadioButtonPackageValid){
//                     setIsFormValid(true);
//                 }
//         }



//     return(
//         <div className='form-container'>
//                 <div className='top-text text'>
//                     <label>{props.title}</label>
//                     <label>{sliderDaysValue} дней</label>
//                 </div>
//                 <div className='form-container__slider'>
//                             <input 
//                             type='range' 
//                             onChange={e => {setSliderValue(e)}}
//                             className='days-input' 
//                             min='1' 
//                             max='30'
//                             ></input>
//                 </div>
//                 <div className='bot-text text'>
//                     <label>1 дней</label>
//                     <label>30 дней</label> 
//                 </div>
//             </div>
//     )
// }
