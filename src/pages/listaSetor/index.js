import React,{useState,useEffect} from "react";
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";
import { FiEdit, FiDelete, FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate,Link } from "react-router-dom";


export default function ListaSetor(){
    const navigate = useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    useEffect(()=>{
        mostrardados();
    },[])
    function editar(id){
        navigate(`/editarsetor/${id}`)
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
                        localStorage.setItem('cad-setor',JSON.stringify(dadosnovos));
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
        let lista = JSON.parse (localStorage.getItem("cad-setor")||"[]");
        setDados(lista);
        setRow(lista.length)
    }
    return(
        
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                <Head title="Estou na Lista Setor"/>

                <div className="button_new">
                    <a href="/cadastrosetor">
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
                        <th>Nome</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        dados.map((pat)=>{
                            return(
                                <tr key={pat.toString()}>
                                    <td>{pat.id}</td>
                                    <td>{pat.nome}</td>
                                    
                                    <td>
                                        <FiEdit
                                        color="black"
                                        size={18}
                                        cursor="pointer"
                                        onClick={(e)=>editar(pat.id)}
                                        />
                                    </td>
                                    <td>
                                        <FiTrash
                                        color="red"
                                        size={18}
                                        cursor="pointer"
                                        onClick={(e)=>excluir(pat.id)}
                                        />
                                    </td>
                                </tr>
                            )

                        })
                    }
                    <tr>
                        <td colSpan={5}style={{textAlign:"right",fontWeight:"bold"}}>Total</td>
                        <td >{row}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}