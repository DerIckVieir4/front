import {FiUser, FiTruck, FiDatabase, FiPackage, FiAlertTriangle} from "react-icons/fi"

export default function Menu(){
    return(
        <div className="menu">
            <p>Menu</p>
            <a href="/listausuarios"><FiUser/>Usuários</a>
            <a href="/listaempresa"><FiTruck/>Empresas</a>
            <a href="/listapatrimonio"><FiDatabase/>Patrimônio</a>
            <a href="/listasetor"><FiPackage/>Setor</a>
            <a href="/listalotacao"><FiAlertTriangle/>Lotação</a>
        </div>
    )
}