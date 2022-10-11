import React, { useState,useEffect } from 'react';
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";
import { useNavigate } from "react-router-dom";

export default function CadastroEmpresa() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail]  = useState("");
    const [senha, setSenha] = useState("");
    const [contato, setContato] = useState(""); 
    const [confirmar, setConfirmar] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados,setDados]=useState([]);
    const [responsavel,setResponsavel] = useState("");
    
    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
        let lista = JSON.parse (localStorage.getItem("cad-empresa")||"[]");
        setDados(lista);

    }

    function verificarduplicidade(email){
        let dadosnovos = [];
        dadosnovos = dados.filter(item=>item.email==email);
        if(dadosnovos.length>0){
            return true
        }
        return false;
    }
    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        let errorMsg = [];
        
        if (i == 0) {
            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-empresa")||"[]");
            lista.push(
                {
                    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                    nome:nome,
                    responsavel:responsavel,
                    contato:contato
                   
                }
            )
            localStorage.setItem("cad-empresa", JSON.stringify(lista));
            alert("Dados Salvos com Sucesso!");
            navigate("/listaempresa");
        }
        else {
            setMsg(errorMsg);
        }
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                <Head title="Cadastro Empresa" />
                <section className="form-cadastro">

                    <form onSubmit={salvardados}>
                    <label>Nome</label>
                        <input placeholder="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />

                        <label>Responsável</label>
                        <input
                            type="text"
                            value={responsavel}
                            onChange={e => setResponsavel(e.target.value)}
                        />
                        <label>contato</label>
                        <input
                            type="number"
                            value={contato}
                            onChange={e => setContato(e.target.value)}
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