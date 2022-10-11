import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrousuario from "./pages/cadastroUsuario";
import Editarusuario from "./pages/editarUsuario";
import ListaUsuarios from "./pages/listaUsuarios";
import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";
import ListaEmpresa from "./pages/listaEmpresa";
import EditarEmpresa from "./pages/editarEmpresa"; 
import CadastroEmpresa from "./pages/cadastroEmpresa";
import ListaPatrimonio from "./pages/listaPatrimonio";
import CadastroPatrimonio from "./pages/cadastroPatrimonio";
import EditarPatrimonio from "./pages/editarPatrimonio";
import CadastroSetor from "./pages/cadastroSetor";
import EditarSetor from "./pages/editarSetor";
import ListaSetor from "./pages/listaSetor";
import EditarLotacao from "./pages/editarLotacao";
import ListaLotacao from "./pages/ListaLotacao";
import CadastroLotacao from "./pages/cadastroLotacao";

export default function Rotas(){
    return(
<BrowserRouter>
        <Routes>                
                <Route path="/" element={<Logon/>} />
                <Route path="/dashboard" element={<Dashboard />} /> 

                <Route path="/listausuarios" element={<ListaUsuarios/>} />
                <Route path="/listaempresa" element={<ListaEmpresa />} />
                <Route path="/listapatrimonio" element={<ListaPatrimonio />} />
                <Route path="/listasetor" element={<ListaSetor />} />
                <Route path="/listalotacao" element={<ListaLotacao />} />
                

                <Route path="/cadastrousuario" element={<Cadastrousuario />} />
                <Route path="/cadastroempresa" element={<CadastroEmpresa />} />
                <Route path="/cadastropatrimonio" element={<CadastroPatrimonio />} />
                <Route path="/cadastrosetor" element={<CadastroSetor />} />
                <Route path="/cadastrolotacao" element={<CadastroLotacao/>} />


                <Route path="/editarusuario/:id" element={<Editarusuario />} />
                <Route path="/editarempresa/:id" element={<EditarEmpresa />} />        
                <Route path="/editarpatrimonio/:id" element={<EditarPatrimonio />} />        
                <Route path="/editarsetor/:id" element={<EditarSetor />} />        
                <Route path="/editarlotacao/:id" element={<EditarLotacao/>} />
        
        </Routes>
        </BrowserRouter>
    )
}