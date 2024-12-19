import { useState } from "react"

function Paragraph5(){
  const [text, setText] = useState("Type")
  const [inputText, setInputText] = useState("")

  function clickButton(){
    setText(inputText)
  }

  return (
    <div>
        <div>
          <h3 style={{color:"gray"}}> {text} </h3>
          <input value={inputText} onChange={(evento)=>{setInputText(evento.target.value)}} type="text"/>
          <button onClick={clickButton}>Click Here To Change</button>
        </div>
    </div>
  )
}
export default Paragraph5