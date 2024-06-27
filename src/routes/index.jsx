import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../Componentes/ListaProdutos";
import { Home } from "../pages/Home";
import { Produtos } from "../pages/Produtos";
import { Login } from "../pages/Login";
export function RouteApp() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/produtos" element={<Produtos/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    );
}