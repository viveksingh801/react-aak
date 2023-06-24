import './InputBox.css';
import Button from './Button';
import { useState } from 'react';

const InputBox = () => {

    const [state, setState] = useState("");

    const checkVal = (event) => {
        setState(event.target.value);

    }

    return (
        <div>
            <input className='inputstyle' type="text" onChange={checkVal}></input>
            <Button submit={state} />
        </div>

    );

}

export default InputBox;