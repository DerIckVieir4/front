import React,{useState,useEffect} from "react";
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";
import { FiEdit, FiDelete, FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate,Link } from "react-router-dom";


export default function ListaLotacao(){
    const navigate = useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    
    useEffect(()=>{
        mostrardados();
    },[])
    function editar(id){
        navigate(`/editarlotacao/${id}`)
    }

function mostrarnome(id,posicao){
    let lista=[];
 


    if(posicao==1){
     lista=JSON.parse(localStorage.getItem("cad-empresa")||"[]");

    }
    if(posicao==2){
     lista=JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
        
    }
    if(posicao==3){
     lista=JSON.parse(localStorage.getItem("cad-setor")||"[]");
       
    }
   if(posicao==4){
     lista=JSON.parse(localStorage.getItem("cad-usuarios")||"[]");


        
    }
    

   
   let cadastro=lista.filter(item=>item.id==id);

    if (cadastro.length>0){
   
    return cadastro[0].nome;

    }
    return "não indentificado"
    
}

    function excluir(id){
        confirmAlert({
            title: 'Excluir Cadastro',
            message: 'Deseja realmente excluir?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        let dadosnovos = [];
                        dadosnovos = dados.filter(item=>item.id!=id);
                        setDados(dadosnovos);
                        localStorage.setItem('cad-lotacao',JSON.stringify(dadosnovos));
                        setRow(dadosnovos.length);
                    }
                },
                {
                    label: 'Não',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };    
    function mostrardados(){
        let lista = JSON.parse (localStorage.getItem("cad-lotacao")||"[]");
        setDados(lista);
        
        setRow(lista.length)
    }
    return(
        
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                <Head title="Estou no Lista de lotaçãos"/>

                <div className="button_new">
                    <a href="/cadastrolotacao">
                        <FiFilePlus
                          size={24}
                          color="green"
                          cursor="pointer"  
                        />
                    </a>
                </div>

                <table>
                    <tr>
                        <th>Id</th>
                        <th>Idemp</th>
                        <th>Idpat</th>
                        <th>Idset</th>
                        <th>Idusu</th>
                        <th>Data</th>
                    </tr>
                    {
                        dados.map((lot)=>{
                            return(
                                <tr key={lot.toString()}>
                                    <td>{lot.id}</td>
                                    <td>{mostrarnome(lot.idemp,1)}</td>
                                    <td>{mostrarnome(lot.idpat,2)}</td>
                                    <td>{mostrarnome(lot.idset,3)}</td>
                                    <td>{mostrarnome(lot.idusu,4)}</td>
                                    <td>{lot.datalotacao}</td>
                                    <td>
                                        <FiEdit
                                        color="black"
                                        size={18}
                                        cursor="pointer"
                                        onClick={(e)=>editar(lot.id)}
                                        />
                                    </td>
                                    <td>
                                        <FiTrash
                                        color="red"
                                        size={18}
                                        cursor="pointer"
                                        onClick={(e)=>excluir(lot.id)}
                                        />
                                    </td>
                                </tr>
                            )

                        })
                    }
                    <tr>
                        <td colSpan={7}style={{textAlign:"right",fontWeight:"bold"}}>Total</td>
                        <td >{row}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}