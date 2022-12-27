import Cliente from "../core/Cliente";
import { IconeEdicao } from "./Icones";
import { IconeDelete } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (clientes: Cliente) => void;
  clienteExcluido?: (clientes: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">idade</th>

        {exibirAcoes ? <th className=""> Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, indice) => {
      return (
        <tr
          key={cliente.id}
          className={`${indice % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}`}
        >
          <td className="text-left p-5">{cliente.id}</td>
          <td className="text-left p-5">{cliente.nome}</td>
          <td className="text-left p-5">{cliente.idade}</td>

          {exibirAcoes ? RenderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function RenderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-green-100 `}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}

        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className={`flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-red-100`}
          >
            {IconeDelete}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`

      text-gray-100
      bg-gradient-to-r from-blue-500 to bg-blue-800`}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
