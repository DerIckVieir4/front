import React, { useState,useEffect } from 'react';
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function Editarusuario(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [nome, setNome] = useState("");
    const [email, setEmail]  = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados,setDados]=useState([]);
    

    function validaremail() {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
        let lista = JSON.parse (localStorage.getItem("cad-usuarios")||"[]");
        setDados(lista);
        let usu = lista.filter(item=>item.id==id);
        setNome(usu[0].nome);
        setEmail(usu[0].email);
        setSenha(usu[0].senha);
        setConfirmar(usu[0].senha);
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
        if (nome.length<3) {
            errorMsg.push("Campo tem menos de 3 caracteres\n");
            i++;
        }
        if (email.length == 0) {
            errorMsg.push("Campo e-mail está vazio");
            i++;
        }
        else if (!validaremail()) {
            errorMsg.push("Por favor! Coloque um e-mail valido!\n");
            i++;
        }
        if (nome.length < 3) {
            errorMsg.push("Campo tem menos de 3 caracteres\n");
            i++;
        }else if(senha!==confirmar){
            errorMsg.push("Senha e confirmação não conferem\n");
            i++;
        }
        if (senha.length < 3) {
            errorMsg.push("Campo tem menos de 3 caracteres\n");
            i++;
        }
        else if(senha!==confirmar){
            errorMsg.push("Senha e confirmação\n")
        }
        if (i == 0) {
            setMsg("");
            let dadosnovos=[];
            let lista = JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
            dadosnovos=lista.map((function(item){
                if (item.id==id){
                    return { id:id,
                             nome:nome,
                             email:email,
                             senha:senha
                    }
                }
                else{
                    return { id:item.id,
                        nome:item.nome,
                        email:item.email,
                        senha:item.senha
                    }
                }
            }));
            localStorage.setItem("cad-usuarios", JSON.stringify(dadosnovos));
            alert("Dados Salvos com Sucesso!");
            navigate("/listausuarios");
        }
        else {
            setMsg(errorMsg);
        }
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                <Head title="Cadastro de Usuarios" />
                <section className="form-cadastro">

                    <form onSubmit={salvardados}>
                        <label>Nome</label>
                        <input placeholder="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />

                        <label>Email</label>
                        <input placeholder="e-mail@email.com"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />


                        <label>Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />

                        <label>Confirmar Senha</label>
                        <input
                            type="password"
                            value={confirmar}
                            onChange={e => setConfirmar(e.target.value)}
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