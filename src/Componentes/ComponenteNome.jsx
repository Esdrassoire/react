import { useEffect, useState } from "react";

function ComponenteNome() {

    const [nome, setNome] = useState("SEU NOME inicio");

    useEffect(() =>{

        alert(`O alterado o nome para ${nome}`)
    },[nome])


    return (
        <div>

            <button onClick={() => setNome("SEU NOME APELIDO")}>Alterar para apelido</button>
            <button onClick={() => setNome("SEU NOME")}>Alterar para Nome</button>

            <p>Nome: {nome}</p>
        </div>
    );
}

export { ComponenteNome };