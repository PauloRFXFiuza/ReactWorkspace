function Paragraph2(){
        
        let number1=2; 
        let number2=10;
        const urlImg="https://upload.wikimedia.org/wikipedia/commons/2/27/SCCorinthians_Paulista_1910.png";

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
            <img src={urlImg}/>
        </div>
    )
}

export default Paragraph2