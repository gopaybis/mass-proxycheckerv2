// /api/check-proxy.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { ip, port } = req.body;
      const url = `https://apihealtcheck.vercel.app/api/v1?ip=${ip}&port=${port}`;
      const response = await fetch(url);
      const data = await response.json();
      
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: true });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
