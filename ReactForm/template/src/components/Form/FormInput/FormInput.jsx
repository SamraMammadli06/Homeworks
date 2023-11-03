import { useState } from 'react';
import './FormInput.css';

function FormInput({labelText, inputType, inputName, regexp,setInvalidInputsCount}) {
    const [isValid, setIsValid] = useState(false);

    function onInput(e) {
        const inputRegexp = new RegExp(`^${regexp}$`, 'gi');
        const isInputValid = inputRegexp.test(e.target.value);
        setIsValid(isInputValid);
        setInvalidInputsCount(prevInvalidInputsCount=>{
            if(isValid===isInputValid) return prevInvalidInputsCount;
            return isInputValid ? prevInvalidInputsCount-1: prevInvalidInputsCount+1;
        })
    }

    return (
        <label>
            {labelText}
            <input
                type={inputType ?? 'text'}
                name={inputName}
                onInput={onInput}
                data-is-valid={isValid}
            />
        </label>
    )
}

export default FormInput;