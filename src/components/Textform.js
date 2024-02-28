import React, { useState } from 'react';


export default function Textform(props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
    }
    const handleonchange=(event)=>{
     settext(event.target.value)
  }
  const handleuppclick=()=>{
    let newtext=text.toLowerCase();
    settext(newtext)
}





const [text,settext]=useState("akash tanksale");

  return (
    
    <>
   <div class="mb-3">
    <h1 className='mx-5'>Text Form</h1>
  <h1>{props.heading}</h1>
  <textarea class="form-control" value={text} onChange={handleonchange}id="mybox" rows="15"></textarea>
</div>
<button type="button" class="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button>
<button type="button" class="btn btn-primary mx-3" onClick={handleuppclick}>convert to lowecase</button>

    <div className="container">
      <h1>your text summery</h1>
      <p>{text.split(" ").length} words,{text.length} characters</p>



    </div></>
  );
}
