import React,{useState,useEffect} from 'react';
import Head from "../../componentres/Head"
import Menu from "../../componentres/Menu"
import { useNavigate } from "react-router-dom";
export default function EditarLotacao(){

    const navigate = useNavigate();   
    const [nome,setNome]=useState("");
    const [idusu,setIdusu]=useState("");
    const [idemp,setEmp]=useState("");
    const [idset,setSet]=useState("");
    const [idpat,setPat]=useState("");
    const [msg,setMsg]=useState([]);
    const [dados,setDados]=useState([]);
    const [usuarios,setUsuarios]=useState([]);
    const [empresa,setEmpresa]=useState([]);
    const [setor,setSetor]=useState([]);
    const [patrimonio,setPatrimonio]=useState([]);
    const [datalotacao,setDatalotacao]=useState([]);


    // function validaremail(){

    //     var re = /\S+@\S+\.\S+/;
    //     return re.test(email);

    // }

        useEffect(()=>{

            mostrardados();
        },[])
    
    function mostrardados(){

            let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            setUsuarios(JSON.parse(localStorage.getItem("cad-usuarios")||"[]"));
            setEmpresa(JSON.parse(localStorage.getItem("cad-empresas")||"[]"));
            setPatrimonio(JSON.parse(localStorage.getItem("cad-patrimonio")||"[]"));
            setSetor(JSON.parse(localStorage.getItem("cad-setor")||"[]"))
            setDados(lista);
    }



    function salvardados(e){
        e.preventDefault();
        let i=0;
        let errorMsg=[];

        if(nome.length<3){

            errorMsg.push("Campo nome tem menos que 3 caracteres\n");
            i++;

        }


        if(idemp!=="" && idpat!=="" && idset!=="" && idusu!==""){

            setMsg("");



        if(i==0)
        {


            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-lotacao")||"[]");
            lista.push(

                {
                    id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                    nome:nome,
                    idusu:idusu,
                    idset:idset,
                    idpat:idpat,
                    idemp:idemp


                }
            )
            localStorage.setItem("cad-lotacao",JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            navigate("/listalotacao");

        }else{

            setMsg(errorMsg);  
            setMsg("Verifique todos os campos");  

        }

    } 
    return(
    <div className="dashboard-container">
        <Menu />
         <div className="principal">
              <Head title=" Cadastro Lotação" />
                <section className="form-cadastro">

                    <form onSubmit={salvardados} >

                        <label>ID</label>

                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />

                        <label>ID_USU</label>

                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />

                        <label>ID_SET</label>

                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />

                        <label>ID_PAT</label>
                        <label>Usuário</label>

                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />

                        <label>ID_EMP</label>
                        <select onChange={(e)=>setIdusu(e.target.value)}>
                            {
                                usuarios.map((usu)=>{
                                    return(
                                        <option value={usu.id}>{usu.nome}</option>
                                    )
                                })
                            }

                        </select>

                        <label>Empresa</label>

                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />

                        <label>DATA_LOTAÇÃO</label>
                        <select onChange={(e)=>setEmp(e.target.value)}>
                            {
                                empresa.map((emp)=>{
                                    return(
                                        <option value={emp.id}>{emp.nome}</option>
                                    )
                                })
                            }

                        </select>

                        <label>Setor</label>

                        <input placeholder="Nome" value={nome} 
                        onChange={e=>setNome(e.target.value)}
                        />


                        <select onChange={(e)=>setSetor(e.target.value)}>
                            {
                                setor.map((set)=>{
                                    return(
                                        <option value={set.id}>{set.nome}</option>
                                    )
                                })
                            }

                        </select>

                        <label>Patrimonio</label>

                        <select onChange={(e)=>setPatrimonio(e.target.value)}>
                            {
                                patrimonio.map((pat)=>{
                                    return(
                                        <option value={pat.id}>{pat.nome}</option>
                                    )
                                })
                            }

                        </select>

                                <input type="Date" 
                                       value={datalotacao} 
                                       onChange={(e)=>setDatalotacao(e.target.value)}
                                />
                                <button className="button_save" type="submit">Salvar</button>




                        <button className="button_save" type="submit">
                            Salvar
                        </button>

                        <pre>{msg[0]}</pre>
                        <pre>{idusu}</pre>



                    </form>
                </section>
         </div>
    </div>
 ) }
                        }