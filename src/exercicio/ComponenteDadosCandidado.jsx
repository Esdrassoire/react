function ComponenteDadosCandidato(props) {
    return (
        <div>
            <div>{props.nome}</div>
            <div>{props.idade}</div>
            <div>{props.telefone}</div>
        </div>
    );
}

export {ComponenteDadosCandidato};