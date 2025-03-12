'use client'
import { useState } from "react";
import "./quiz.css"

function Quiz() {

    const [ p1, alteraP1 ] = useState(0)
    const [ p2, alteraP2 ] = useState(0)
    const [ p3, alteraP3 ] = useState(0)
    const [ p4, alteraP4 ] = useState(0)
    const [ total, alteraTotal ] = useState(0)

    const [ selecionado, alteraSelecionado ] = useState(["","","",""])

    function calculaTotal(){
        if( p4 == "Tropa de Elite" ){
            alteraTotal(p1+p2+p3+1)
        }else{
            alteraTotal(p1+p2+p3)
        }
    }

    function verificaFilme(e){
        if( e.target.value == "Tropa de Elite"){
            alteraP4(1)
        }else{
            alteraP4(0)
        }
    }

    return (
        <div>
            
            <h1>Quiz Conradito</h1>
            <p>Assinale a opção correta!</p>
            
            <hr/>

            <h2>Qual a cor do cavalo branco de Napoleãum?</h2>
            <label> <input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Preto </label>
            <br/>
            <label> <input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Azul </label>
            <br/>
            <label> <input name="p1" type="radio" onChange={ ()=> alteraP1(0) } /> Branco </label>
            <br/>
            <label> <input name="p1" type="radio" onChange={ ()=> alteraP1(1) } /> Transparente </label>

            <hr/>

            <h2>Qual a melhor letra?</h2>
            <label> <input name="p2" type="radio" onChange={ ()=> alteraP2(1) } /> A </label>
            <br/>
            <label> <input name="p2" type="radio" onChange={ ()=> alteraP2(0) } /> B </label>
            <br/>
            <label> <input name="p2" type="radio" onChange={ ()=> alteraP2(0) } /> C </label>
            <br/>
            <label> <input name="p2" type="radio" onChange={ ()=> alteraP2(0) } /> X </label>

            <hr/>

            <h2> Qual é a fruta vermelha? </h2>
            <p className={selecionado[0]} onClick={ ()=> { alteraP3(0); alteraSelecionado(["selecionado","","",""]) } } > Melancia </p>
            <p className={selecionado[1]} onClick={ ()=> { alteraP3(0); alteraSelecionado(["","selecionado","",""]) } } > Abacate </p>
            <p className={selecionado[2]} onClick={ ()=> { alteraP3(1); alteraSelecionado(["","","selecionado",""]) } } > Maçã </p>
            <p className={selecionado[3]} onClick={ ()=> { alteraP3(0); alteraSelecionado(["","","","selecionado"]) } } > Kiwi </p>

            <hr/>

            <h2>Qual é o melhor filme do mundo?</h2>
            <input onChange={ (e)=> console.log(e) } />

            <hr/>
            
            <button onClick={ ()=> alteraTotal(p1+p2+p3+p4) } >Enviar respostas</button>

            <p>Total de pontos: {total}</p>



















<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default Quiz;