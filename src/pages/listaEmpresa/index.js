import React,{useState,useEffect} from "react";
import Head from "../../componentres/Head";
import Menu from "../../componentres/Menu";
import { FiEdit, FiDelete, FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate,Link } from "react-router-dom";


export default function ListaEmpresa(){
    const navigate = useNavigate();
    const [dados,setDados]=useState([]);
    const [row,setRow] = useState(0);
    useEffect(()=>{
        mostrardados();
    },[])
    function editar(id){
        navigate(`/editarempresa/${id}`)
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
                        localStorage.setItem('cad-empresa',JSON.stringify(dadosnovos));
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
        let lista = JSON.parse (localStorage.getItem("cad-empresa")||"[]");
        setDados(lista);
        setRow(lista.length)
    }
    return(
        
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                <Head title="Estou no Lista de Empresas"/>

                <div className="button_new">
                    <a href="/cadastroempresa">
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
                        <th>Responsavel</th>
                        <th>contato</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {
                        dados.map((emp)=>{
                            return(
                                <tr key={emp.toString()}>
                                    <td>{emp.id}</td>
                                    <td>{emp.nome}</td>
                                    <td>{emp.responsavel}</td>
                                    <td>{emp.contato}</td>
                                    <td>
                                        <FiEdit
                                        color="black"
                                        size={18}
                                        cursor="pointer"
                                        onClick={(e)=>editar(emp.id)}
                                        />
                                    </td>
                                    <td>
                                        <FiTrash
                                        color="red"
                                        size={18}
                                        cursor="pointer"
                                        onClick={(e)=>excluir(emp.id)}
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