import React, {useState} from 'react'
import './TextForm.css'

const TextForm = () => {

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const gettingInput = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
    <div>
        <div>
            <textarea name="" id="" cols="30" rows="10" value={text} onChange={gettingInput} placeholder="Enter text here...."></textarea>
        </div>
        <div>
            <button onClick={upperCase}>Convert to Upper Case</button>
            <button onClick={lowerCase}>Convert to Lower Case</button>
        </div>
    </div>
  )
}

export default TextForm