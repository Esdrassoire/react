import CarouselAnuncios from "../Componentes/CarouselAnuncios";
import { ListaProdutos } from "../Componentes/ListaProdutos";
import NavBar from "../Componentes/NAVbar";

function Produtos(props) {
    return (
        <>
        <NavBar />
        <h1></h1>
        <CarouselAnuncios /> 
        <h1>Produtos</h1>
        <ListaProdutos />
        </>
    )
}

export { Produtos };