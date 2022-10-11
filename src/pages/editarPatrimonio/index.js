import React, { useState,useEffect } from 'react';
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";
import { useNavigate, useParams } from "react-router-dom";

export default function EditarPatrimonio(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [nome, setNome] = useState("");
    const [datadeaquisicao,setDatadeaquisicao] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados,setDados]=useState([]);

    
    useEffect(()=>{
        mostrardados();
       
    },[])
    function mostrardados(){
        let lista = JSON.parse (localStorage.getItem("cad-patrimonio")||"[]");
        setDados(lista);
        let usu = lista.filter(item=>item.id==id);
        setNome(usu[0].nome);
        setDatadeaquisicao(usu[0].datadeaquisicao);
        
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
            let lista = JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
            dadosnovos=lista.map((function(item){
                if (item.id==id){
                    return { id:id,
                             nome:nome,
                             datadeaquisicao:datadeaquisicao
                    }
                }
                else{
                    return { id:item.id,
                        nome:item.nome,
                        datadeaquisicao:datadeaquisicao
                    }
                }
            }));
            localStorage.setItem("cad-patrimonio", JSON.stringify(dadosnovos));
            alert("Dados Salvos com Sucesso!");
            navigate("/listapatrimonio");
        }
        else {
            setMsg(errorMsg);
        }
    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                <Head title="Editar Patrimônio" />
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
                            value={datadeaquisicao}
                            onChange={e => setDatadeaquisicao(e.target.value)}
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