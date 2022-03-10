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

    const clearText = () => {
        setText('');
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
            <button onClick={clearText}>Clear Text</button>
        </div>
        <div>
            <h3>Text Summary</h3>
        </div>
        <div>
            Number of Words: {text.split(" ").length}
        </div>
        <div>
            Number of Characters: {text.length}
        </div>
        <div>
            {text.split(" ").length * 0.008} minutes read.
        </div>
        <div>
            {text}
        </div>
    </div>
  )
}

export default TextForm