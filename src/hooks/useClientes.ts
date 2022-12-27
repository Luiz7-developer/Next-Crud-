import { Fragment, useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();
  const { tabelaVisivel, exibirTabela, exibirformulario } = useTabelaOuForm();
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  useEffect(obterTodos, []);

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirformulario();
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirformulario();
  }
  async function salvarCLiente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }
  return {
    exibirTabela,
    tabelaVisivel,
    clientes,
    cliente,
    obterTodos,
    selecionarCliente,
    excluirCliente,
    novoCliente,
    salvarCLiente,
  };
}
