import Cliente from "./Cliente";

interface ClienteRepositorio {
  salvar(cliente: Cliente): Promise<Cliente>;
  excluir(cliente: Cliente): Promise<void>;
  obterTodos(): Promise<Cliente[]>;
}

export default ClienteRepositorio;
