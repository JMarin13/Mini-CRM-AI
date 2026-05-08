import api from '../api/api';


export const obtenerLeads = async () => {

  const response = await api.get('/leads');

  return response.data;

};


export const crearLead = async (lead) => {

  const response = await api.post('/leads', lead);

  return response.data;

};


export const obtenerLead = async (id) => {

  const response = await api.get(`/leads/${id}`);

  return response.data;

};