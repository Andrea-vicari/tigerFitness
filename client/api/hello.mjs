


export default function handler(request, response) {
  const { name = 'World' } = request.query;
  return response.send(`Hello ${name}!`);
}



export default function handler(request, response) {
  return response.status(200).json({ text: 'I am a Serverless Function!' });
}