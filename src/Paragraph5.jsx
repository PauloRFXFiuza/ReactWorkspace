import { useState } from "react"

function Paragraph5(){
  const [text, setText] = useState("Stage 1")
  return (
    <div>
        <div>
          <p style={{color:"gray"}}> {text} </p>
          <button onClick={()=>{setText("Stage 2")}}>Change State</button>
        </div>
    </div>
  )
}
export default Paragraph5