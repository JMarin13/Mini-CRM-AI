import { useState } from 'react';

import { crearLead } from '../services/leadService';


function LeadForm({ onLeadCreated }) {

  const [form, setForm] = useState({
    nombreEmpresa: '',
    contacto: '',
    email: '',
    industria: '',
    descripcionNecesidad: ''
  });


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    await crearLead(form);

    setForm({
      nombreEmpresa: '',
      contacto: '',
      email: '',
      industria: '',
      descripcionNecesidad: ''
    });

    onLeadCreated();

  };


  return (
    <form onSubmit={handleSubmit}>

      <h2>Crear Lead</h2>

      <input
        type="text"
        name="nombreEmpresa"
        placeholder="Nombre empresa"
        value={form.nombreEmpresa}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="contacto"
        placeholder="Contacto"
        value={form.contacto}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <select
        name="industria"
        value={form.industria}
        onChange={handleChange}
        required
      >

        <option value="">Seleccione industria</option>

        <option value="Tecnología">Tecnología</option>

        <option value="Finanzas">Finanzas</option>

        <option value="Retail">Retail</option>

        <option value="Salud">Salud</option>

      </select>

      <textarea
        name="descripcionNecesidad"
        placeholder="Descripción necesidad"
        value={form.descripcionNecesidad}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Guardar Lead
      </button>

    </form>
  );

}

export default LeadForm;