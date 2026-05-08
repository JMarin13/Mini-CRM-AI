import { useState } from "react";

import { crearLead } from "../services/leadService";

function LeadForm({ onLeadCreated }) {
  const [form, setForm] = useState({
    nombreEmpresa: "",
    contacto: "",
    email: "",
    industria: "",
    descripcionNecesidad: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await crearLead(form);

    setForm({
      nombreEmpresa: "",
      contacto: "",
      email: "",
      industria: "",
      descripcionNecesidad: "",
    });

    onLeadCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700">Crear Lead</h2>

      <input
        type="text"
        name="nombreEmpresa"
        placeholder="Nombre empresa"
        value={form.nombreEmpresa}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        name="contacto"
        placeholder="Contacto"
        value={form.contacto}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
      />

      <select
        name="industria"
        value={form.industria}
        onChange={handleChange}
        required
        className="w-full border rounded-lg p-3"
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
        className="w-full border rounded-lg p-3 h-32"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Guardar Lead
      </button>
    </form>
  );
}

export default LeadForm;
