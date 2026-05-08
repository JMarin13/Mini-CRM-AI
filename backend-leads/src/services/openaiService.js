const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


const analizarLead = async (lead) => {

  const prompt = `
Empresa:${lead.nombreEmpresa}
Industria:${lead.industria}
Necesidad:${lead.descripcionNecesidad}

JSON:
{
 "prioridadIA":"",
 "resumenIA":"",
 "recomendacionComercial":""
}
`;

  const response = await client.chat.completions.create({
    model: 'gpt-4.1-mini',

    messages: [
      {
        role: 'user',
        content: prompt
      }
    ],

    response_format: {
      type: 'json_object'
    },

    temperature: 0
  });

  return JSON.parse(
    response.choices[0].message.content
  );

};


module.exports = {
  analizarLead
};