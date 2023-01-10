interface EntradaProps {
  text: string;
  tipo?: "text" | "number";
  value: any;
  somenteLeitura?: boolean;
  className?: string;
  valorMudou?: (value: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.value}
        readOnly={props.somenteLeitura}
        onChange={(evento) => props.valorMudou?.(evento.target.value)}
        className={`
        bg-gray-45
        border border-purple-500 rounded-lg
        focus:outline-none
        px-4 py-2       
        ${props.somenteLeitura ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
}
