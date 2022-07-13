import React from 'react';
import { useState } from 'react';


const VariantList = (props) => {

const [radioButtonValue, setRadioButtonValue] = useState('')
function setPackage(){
    if(document.getElementById('social').checked) {
        setRadioButtonValue(props.pack1Value); 
    } 
    else if(document.getElementById('bomj').checked){
        setRadioButtonValue(props.pack2Value);
    }
    else if(document.getElementById('chill').checked){
        setRadioButtonValue(props.pack3Value);
    }
    
    // formValidation();
}

  return (
    <div className='form-container__packages-block form-container__item'>
                <div className='top-text text'>
                    <label>{props.title}</label>
                    {(radioButtonValue!='') && <label>{radioButtonValue}</label>}
                    {(radioButtonValue =='') && <label>{props.defaultValue}</label>}
                </div>
                <div className='packages-block__item'>
                    <label className='items-label'> {props.pack1Value}</label>
                    <input type='radio' name = 'pack_name' id={props.pack1Id} 
                    onClick={e =>{setPackage()}} 
                    ></input>
                </div>
                <div className='packages-block__item'>
                    <label className='items-label'> {props.pack2Value}</label>
                    <input type='radio' name = 'pack_name' id={props.pack2Id} 
                    onClick={e =>{setPackage()}} 
                    ></input>
                </div>
                <div className='packages-block__item'>
                    <label className='items-label'> {props.pack3Value}</label>
                    <input type='radio' name = 'pack_name' id={props.pack3Id} 
                    onClick={e =>{setPackage()}} 
                    ></input>
                </div>
            </div>
  )
}


export default VariantList