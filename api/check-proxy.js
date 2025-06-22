// /api/check-proxy.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { ip, port } = req.body;
    try {
      const response = await fetch(`https://apihealtcheck.vercel.app/api/v1?ip=${ip}&port=${port}`);
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}
