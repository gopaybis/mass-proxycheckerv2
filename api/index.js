import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { ip, port } = req.body;
      const url = `https://apihealtcheck.vercel.app/api/v1?ip=${ip}&port=${port}`;
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: true, message: 'Failed to check proxy.' });
    }
  } else {
    // Menangani GET Request untuk mengirimkan file index.html
    res.setHeader("Content-Type", "text/html");
    res.sendFile("index.html", { root: process.cwd() + "/public" });
  }
}
