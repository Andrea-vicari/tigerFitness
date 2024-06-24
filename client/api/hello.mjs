


export default function handler(request, response) {
  const { name = 'World' } = request.query;
  response.send(`Hello ${name}!`);
  return response.status(200).json({ text: 'I am a Serverless Function!' });

}



