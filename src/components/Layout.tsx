import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
      flex flex-col    
    // w-2/3
   bg-white text-gray-900 rounded-md
    sm: h-auto w-auto
   `}
    >
      <Titulo>{props.titulo}</Titulo>
      <div className="p-6">{props.children}</div>
    </div>
  );
}
