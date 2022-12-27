function Titulo(props) {
  return (
    <div className="flex flex-col justify-center i ">
      <h1 className="px-12 py-2 text-3xl">{props.children}</h1>
      <hr className="border-2 border-blue-600" />
    </div>
  );
}

export default Titulo;
