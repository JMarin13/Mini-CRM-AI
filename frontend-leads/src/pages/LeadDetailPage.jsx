import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

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

    return (
      <div className="min-h-screen bg-gray-100 px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl bg-white p-8 shadow-md">
            <p className="text-gray-600">Cargando detalle del lead...</p>
          </div>
        </div>
      </div>
    );

  }


  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Volver a leads
        </Link>

        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="border-b border-gray-200 bg-gray-900 px-8 py-7 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-200">
                  Detalle del lead
                </p>

                <h1 className="text-3xl font-bold">
                  {lead.nombreEmpresa}
                </h1>

                <p className="mt-2 text-gray-300">
                  {lead.industria}
                </p>
              </div>

              {lead.prioridadIA && (
                <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Prioridad IA: {lead.prioridadIA}
                </span>
              )}
            </div>
          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.25fr]">
            <section className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Información de contacto
              </h2>

              <div className="rounded-lg border border-gray-200">
                <div className="border-b border-gray-200 p-4">
                  <p className="text-sm font-medium text-gray-500">Contacto</p>
                  <p className="mt-1 text-gray-900">{lead.contacto}</p>
                </div>

                <div className="border-b border-gray-200 p-4">
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="mt-1 break-words text-gray-900">{lead.email}</p>
                </div>

                <div className="p-4">
                  <p className="text-sm font-medium text-gray-500">Industria</p>
                  <p className="mt-1 text-gray-900">{lead.industria}</p>
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Necesidad del cliente
              </h2>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <p className="leading-7 text-gray-700">
                  {lead.descripcionNecesidad}
                </p>
              </div>
            </section>
          </div>

          <div className="grid gap-6 border-t border-gray-200 bg-gray-50 p-8 md:grid-cols-2">
            <section className="rounded-lg bg-white p-6 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Resumen generado por IA
              </p>

              <p className="leading-7 text-gray-700">
                {lead.resumenIA || 'Sin resumen disponible.'}
              </p>
            </section>

            <section className="rounded-lg bg-white p-6 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Recomendación comercial
              </p>

              <p className="leading-7 text-gray-700">
                {lead.recomendacionComercial || 'Sin recomendación disponible.'}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

}

export default LeadDetailPage;
