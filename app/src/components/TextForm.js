import React ,{useState}from 'react'

export default function TextForm(props) {
const handleOnChange =(event)=>{

    console.log("On Change")
    setText(event.target.value)
}

const Upcase = () => {
    console.log("upper case clicked")
    let newText = text.toUpperCase()
    setText(newText)    
}

    const [text, setText] = useState("Enter text here")

    
    return (
        <div>
    
        <div className="mb-3">
        <h1>{props.heading}</h1>

        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        <br></br>
        <button className="btn btn-primary" onClick={Upcase}>Convert to uppercase</button>
        </div>
    </div>
  )
}
