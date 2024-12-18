function Paragraph2(){
        
        let number1=2; 
        let number2=10;

    return (
        
        <div>
            <p>
            {number1} + {number2} = {number1 + number2}
            </p>
            <p>
            {number1} - {number2} = {number1 - number2}
            </p>
            <p>
            {number1} * {number2} = {number1 * number2}
            </p>
            <p>
            {number1} / {number2} = {number1 / number2}
            </p>
        </div>
    )
}

export default Paragraph2