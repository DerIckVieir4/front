import React, { useState,useEffect } from 'react';
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";
import { useNavigate } from "react-router-dom";

export default function CadastroSetor() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados,setDados]=useState([]);
    
    

    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
        let lista = JSON.parse (localStorage.getItem("cad-setor")||"[]");
        setDados(lista);

    }

    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        let errorMsg = [];
        
        if (i == 0) {
            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-setor")||"[]");
            lista.push(
                {
                    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                    nome:nome
                }
            )
            localStorage.setItem("cad-setor", JSON.stringify(lista));
            alert("Dados Salvos com Sucesso!");
            navigate("/listasetor");
        }
        else {
            setMsg(errorMsg);
        }
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                <Head title="Cadastro Setor"/>
                <section className="form-cadastro">

                    <form onSubmit={salvardados}>
                    <label>Nome</label>
                        <input placeholder="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />

                        <button className="button_save" type="submit">
                            Salvar
                        </button>
                        <pre> <h1>{msg}</h1> </pre>
                        
                      
                    </form>
                </section>
            </div>
        </div>
    )
}