import { useEffect, useState } from 'react';

import LeadForm from '../components/LeadForm';

import LeadList from '../components/LeadList';

import { obtenerLeads } from '../services/leadService';


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
    <div>

      <h1>CRM Leads</h1>

      <LeadForm onLeadCreated={cargarLeads} />

      <hr />

      <LeadList leads={leads} />

    </div>
  );

}

export default LeadsPage;