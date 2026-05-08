import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { obtenerLead } from '../services/leadService';


function LeadDetailPage() {

  const { id } = useParams();

  const [lead, setLead] = useState(null);


  useEffect(() => {

    cargarLead();

  }, []);


  const cargarLead = async () => {

    const data = await obtenerLead(id);

    setLead(data);

  };


  if (!lead) {

    return <p>Cargando...</p>;

  }


  return (
    <div>

      <h1>Detalle Lead</h1>

      <h2>{lead.nombreEmpresa}</h2>

      <p>
        <strong>Contacto:</strong> {lead.contacto}
      </p>

      <p>
        <strong>Email:</strong> {lead.email}
      </p>

      <p>
        <strong>Industria:</strong> {lead.industria}
      </p>

      <p>
        <strong>Necesidad:</strong>
        {lead.descripcionNecesidad}
      </p>

      <hr />

      <h3>Resumen generado por IA</h3>

      <p>
        {lead.resumenIA}
      </p>

      <h3>Recomendación comercial</h3>

      <p>
        {lead.recomendacionComercial}
      </p>

    </div>
  );

}

export default LeadDetailPage;