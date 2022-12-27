import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada text="Código" somenteLeitura value={id} className="mb-4" />
      ) : (
        false
      )}
      <Entrada text="Nome" value={nome} valorMudou={setNome} className="mb-4" />
      <Entrada text="Idade" tipo="number" value={idade} valorMudou={setIdade} />
      <div className="mt-6 flex justify-end">
        <Botao
          cor="blue"
          className="mr-2"
          onCLick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="gray" onCLick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
