function Paragraph4({team,paragraph}){
   
return (
    
    <div>
        <h3>{team}</h3>
        {paragraph ? <p>Winner</p> : <p>Loser</p>}
        
    </div>
)
}

export default Paragraph4

/*{Condição ? Comando se Condição for True : Comando se Condição for False*/