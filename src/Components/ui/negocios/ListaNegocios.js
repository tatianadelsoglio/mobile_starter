


export const ListaNegocios = () => {

  const data = [
    {
      asunto: "Venta de soja",
      cliente: "A.P.I.N.T.A.",
      importe: 12500,
      fechaInicio: "27/07/22",
      cierreEstimado: "20/08/22"
    },
    {
      asunto: "Venta de trigo",
      cliente: "Tres Arroyos",
      importe: 500,
      fechaInicio: "27/07/22",
      cierreEstimado: "20/08/22"
    },
    {
      asunto: "Venta de soja",
      cliente: "SABO ADRIAN",
      importe: 850,
      fechaInicio: "27/07/22",
      cierreEstimado: "20/08/22"
    },
    {
      asunto: "Venta de semillas",
      cliente: "SABO ADRIAN",
      importe: 1,
      fechaInicio: "27/07/22",
      cierreEstimado: "20/08/22"
    },
  ]


  return (
    <div className="contenedor-negocios">
      <p className="titulo-negocio">Negocios</p>
      {data.map( negocio => {
        return (
        <div className="card-negocio">
          
        </div>
        )
      })}
    </div>
  );
};
