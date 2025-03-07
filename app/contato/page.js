'use client'

import { useState } from "react"

export default function Contato(){

    const [ nome, alteraNome ] = useState("")
    const [ mensagem, alteraMensagem ] = useState("")

    function enviaMensagem(e){

        e.preventDefault()

        if( nome == "" || mensagem == "" ){
           
        }else{
           
        }

    }

    return(
        <div>

            <h1>Página de contato </h1>
            <p>Entre em contato conosco.</p>

            <hr/>

            <form onSubmit={ (e)=> enviaMensagem(e) } >

                <label>
                    Digite seu nome:
                    <input onChange={ (e)=> alteraNome(e.target.value) } />         
                </label>

                <br/>

                <label>
                    Digite sua mensagem:
                    <input onChange={ (e)=> alteraMensagem(e.target.value) } />
                </label>

                <br/>

                <button>Enviar</button>

            </form>

        </div>
    )
}