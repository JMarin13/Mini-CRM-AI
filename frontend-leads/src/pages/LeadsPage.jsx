import { useEffect, useState } from "react";

import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";

import { obtenerLeads } from "../services/leadService";

function LeadsPage() {
  const [leads, setLeads] = useState([]);

  const cargarLeads = async () => {
    const data = await obtenerLeads();

    setLeads(data);
  };

  useEffect(() => {
    cargarLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">CRM Leads IA</h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <LeadForm onLeadCreated={cargarLeads} />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <LeadList leads={leads} />
        </div>
      </div>
    </div>
  );
}

export default LeadsPage;
