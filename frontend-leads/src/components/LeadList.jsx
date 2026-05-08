import { Link } from 'react-router-dom';


function LeadList({ leads }) {

  return (
    <div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Leads
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-200 text-left">

              <th className="p-3">Empresa</th>

              <th className="p-3">Contacto</th>

              <th className="p-3">Industria</th>

              <th className="p-3">Fecha</th>

              <th className="p-3">Prioridad IA</th>

              <th className="p-3">Acciones</th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (

              <tr
                key={lead.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3">
                  {lead.nombreEmpresa}
                </td>

                <td className="p-3">
                  {lead.contacto}
                </td>

                <td className="p-3">
                  {lead.industria}
                </td>

                <td className="p-3">
                  {new Date(
                    lead.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {lead.prioridadIA}
                  </span>

                </td>

                <td className="p-3">

                  <Link
                    to={`/lead/${lead.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Ver detalle
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );

}

export default LeadList;