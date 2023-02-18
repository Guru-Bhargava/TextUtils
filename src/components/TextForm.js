import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleUPClick=()=>{
        // console.log('UpperCase was Clicked'+text);
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert('Converted to UpperCase','success');
    }

    const handleDownClick=()=>{
        let LowerCaseText=text.toLowerCase();
        setText(LowerCaseText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleOnChange=(event)=>{
        console.log('OnChange was Clicked')
        setText(event.target.value)
    }

    const handleClearClick=()=>{
        let cleartext='';
        setText(cleartext);
        props.showAlert("Text was cleared", "success");
    }

    
    // setText("New Text") To update the text variable
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert To UpperCase</button>
                <button className="btn btn-secondary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
                <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes it takes to read the complete para</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the TextBox to Preview it"}</p>
            </div>
        </>
    )
}
