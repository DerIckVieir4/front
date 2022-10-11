import React, { useState,useEffect } from 'react';
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarEmpresa(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [nome, setNome] = useState("");
    const [responsavel,setResponsavel] = useState("");
    const[contato,setContato]=useState("");
    const [msg, setMsg] = useState([]);
    const [dados,setDados]=useState([]);

    // function validaremail() {
    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);
    // }
    useEffect(()=>{
        mostrardados();
    },[])
    function mostrardados(){
        let lista = JSON.parse (localStorage.getItem("cad-empresa")||"[]");
        setDados(lista);
        let usu = lista.filter(item=>item.id==id);
        setNome(usu[0].nome);
        setResponsavel(usu[0].responsavel);
        setContato(usu[0].contato);
        
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
        if (i == 0) {
            setMsg("");
            let dadosnovos=[];
            let lista = JSON.parse(localStorage.getItem("cad-empresa")||"[]");
            dadosnovos=lista.map((function(item){
                if (item.id==id){
                    return { id:id,
                             nome:nome,
                             responsavel:responsavel,
                             contato:contato
                    }
                }
                else{
                    return { id:item.id,
                        nome:item.nome,
                        responsavel:item.responsavel,
                        contato:item.contato
                    }
                }
            }));
            localStorage.setItem("cad-empresa", JSON.stringify(dadosnovos));
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
                <Head title="Cadastro de Usuarios" />
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