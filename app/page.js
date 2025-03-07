'use client'

import { useState } from "react";
import "./home.css"

export default function Home() {

    const [ carrinho, alteraCarrinho ] = useState(0)

    function removeCarrinho(){
        if(carrinho > 0){
          alteraCarrinho(carrinho - 1)  
        }
    }

    return (
        <div>

            <h1>Conradito Market</h1>
            <p>O melhor supermercado do bairro!</p>

            <hr/>

            <p className="carrinho" >Itens no carrinho: {carrinho} </p>  
            <button onClick={ ()=> removeCarrinho() }>Remover item</button>
            <button onClick={ ()=> alteraCarrinho( 0 ) } >Limpar carrinho</button>
            
            <hr/>

            <h2>Produtos</h2>

            <div className="produto" >
                <img src="https://placehold.co/150" />
                <p>Cenoura</p>
                <p>R$ 4,50 (kg)</p>
                <button onClick={ ()=> alteraCarrinho( carrinho + 1 ) } >Comprar</button>
            </div>


        </div>
    );
}
