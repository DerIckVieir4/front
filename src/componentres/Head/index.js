import { FiLogOut } from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function Head({title}){
    const navigate = useNavigate();
    const logoff=()=>{
        navigate("/");
        // window.location.href="/logon";
    }
    function saida(){
        confirmAlert({
          title: 'Atenção',
          message: 'Deseja realmente sair do sistema?',
          buttons: [
            {
              label: 'Sim',
              onClick: () => {logoff()}
            },
            {
              label: 'Não',
              onClick: () => alert('Click No')
            }
          ]
        });
      };
    
    return(
        <div className="head">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="logoff">
                    <FiLogOut
                        size={24}
                        color="red"
                        cursor="pointer"
                        onClick={saida}
                    />
                    
            </div>
        </div>
    )
}