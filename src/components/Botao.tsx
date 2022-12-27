interface BotaoProps {
  cor?: "blue" | "green" | "gray";
  className?: string;
  children?: any;
  onCLick?: () => void;
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? "gray";

  return (
    <button
      onClick={props.onCLick}
      className={`
      px-4 py-2 
      bg-gradient-to-r from-${cor}-400 to-${cor}-700
      text-white
      rounded-md
      ${props.className}
  `}
    >
      {props.children}
    </button>
  );
}
