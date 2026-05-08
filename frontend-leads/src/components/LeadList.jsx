import { Link } from 'react-router-dom';


function LeadList({ leads }) {

  return (
    <div>

      <h2>Listado de Leads</h2>

      <table border="1">

        <thead>

          <tr>

            <th>Empresa</th>

            <th>Contacto</th>

            <th>Industria</th>

            <th>Fecha creación</th>

            <th>Prioridad IA</th>

            <th>Acciones</th>

          </tr>

        </thead>

        <tbody>

          {leads.map((lead) => (

            <tr key={lead.id}>

              <td>{lead.nombreEmpresa}</td>

              <td>{lead.contacto}</td>

              <td>{lead.industria}</td>

              <td>
                {new Date(lead.createdAt).toLocaleDateString()}
              </td>

              <td>{lead.prioridadIA}</td>

              <td>

                <Link to={`/lead/${lead.id}`}>
                  Ver detalle
                </Link>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );

}

export default LeadList;