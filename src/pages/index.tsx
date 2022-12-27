import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    selecionarCliente,
    excluirCliente,
    salvarCLiente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes();
  return (
    <div
      className={`
    flex justify-center 
    items-center h-screen 
    bg-gradient-to-r
     from-blue-500 to-blue-700 text-white`}
    >
      <Layout titulo="Cadastro">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onCLick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCLiente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
