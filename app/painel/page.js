'use client'

import { useState } from "react";
import "./painel.css"

function Painel() {

    const [ usuario, alteraUsuario ] = useState("")
    const [ senha, alteraSenha ] = useState("")

    const [ mostraErro, alteraMostraErro ] = useState(false)
    const [ mostraSucesso, alteraMostraSucesso ] = useState(false)

    function entrar(){

        if( usuario == "conrado" && senha == "123" ){
            alteraMostraErro(false)
            alteraMostraSucesso(true)
        }else if(usuario == "" && senha == ""){
            alteraMostraErro(false)
            alteraMostraSucesso(false)
        }else{
            alteraMostraErro(true)
            alteraMostraSucesso(false)
        }

    }

    return (
        <div>
            <h1>Painel administrativo</h1>


            <label>
                Digite o usuário:
                <input required onChange={ (e)=> alteraUsuario(e.target.value) } />
            </label>

            <br/>

            <label>
                Digite a senha:
                <input onChange={ (e)=> alteraSenha(e.target.value) } />
            </label>

            <br/>

            <button onClick={ ()=> entrar() } >Entrar</button>

            {/* Operador TERNÁRIO */}

            {
                mostraErro == true ?  
                    <div className="erro" >
                        <p>Usuário ou senha incorretos</p>
                    </div>
                :
                    <div></div>
            }

            {
                mostraSucesso == true ?  
                    <div className="sucesso" >
                        <p>Usuário logado com sucesso!</p>
                    </div>
                :
                    <div></div>
            }


        </div>
    );
}

export default Painel;