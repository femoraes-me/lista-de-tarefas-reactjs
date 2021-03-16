function App(){

            
    const [tarefas, setTarefas] = React.useState(['Tomar Café', 'Tomar Banho']); // variaves de tarefas

    function adicionarTarefa(nomeTarefa) {
        setTarefas( [...tarefas, nomeTarefa] ); // adicionando na lista
    }

    function removerTarefa(indice) {
        const copiaVetor  = [...tarefas];
        copiaVetor.splice(indice, 1);
        setTarefas(copiaVetor);
    }
    
    return (
        // Container Principal
        <div className="container">
            
            <div className="row">
                <div className="col">
                    <h1 className="text-center mt-5">Lista de Tarefas</h1>
                </div>
            </div>
            
            <FomrNovaTarefa adicionarTarefa={adicionarTarefa} />
            
            <ListaTarefas tarefas={tarefas} removerTarefa={removerTarefa} />

        </div> 
    );
}

// componente de lista de tarefa
function ListaTarefas({tarefas, removerTarefa}) {

    return (
        <ul className="list-group mt-5">

            {tarefas.map((nomeTarefa, indice) => 
                <ItemListaTarefa indice={indice} nomeTarefa={nomeTarefa} removerTarefa={removerTarefa} key={indice} /> 
            )}

        </ul>
    );
}


// componente de formulário
function FomrNovaTarefa({ adicionarTarefa }) {

    const [novaTarefa, setNovaTarefa] = React.useState(''); // variavel de estado interno do componente

    // mudando o valor da variavél tarefa
    function mudarNovaTarefa(evento) {
        setNovaTarefa(evento.target.value);
    }

    // adicionando nova tarefa no vetor de estado de tarefas
    function enviarNovaTarefa(evento) {
        evento.preventDefault();

        adicionarTarefa(novaTarefa);

        setNovaTarefa(''); // limpar formulario de nova tarefa
    }

    return (
        <form onSubmit={enviarNovaTarefa} className="mt-5">
                <div className="row">
                    <div className="col-auto">
                        <label htmlFor="novaTarefa" className="col-form-label">Nova Tarefa</label>
                    </div>
                    <div className="col" >
                        <input type="text" name="novaTarefa" id="novaTarefa" className="form-control" value={novaTarefa} onChange={mudarNovaTarefa} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Criar Tarefa</button>
                    </div>
                </div>
            </form>
    )
}

// componente de item na lista de tarefa
function ItemListaTarefa({ indice, nomeTarefa, removerTarefa }) {

    return (
        <li className="list-group-item" >
            <div className="row">
                <div className="col">{nomeTarefa}</div>
                <div className="col-auto">
                    <button 
                        type="button" 
                        className="btn-close" 
                        aria-label="Close" 
                        onClick={ () => removerTarefa(indice) }>
                    </button>
                </div>
            </div>
        </li>
    );
}

var rootElement = React.createElement(App);
var container = document.querySelector('#app');
ReactDOM.render(rootElement, container);