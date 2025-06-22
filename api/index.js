module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { ip, port } = req.body;
    try {
      const url = `https://apihealtcheck.vercel.app/api/v1?ip=${ip}&port=${port}`;
      const response = await fetch(url);
      const data = await response.json();
      return res.status(200).json(data); // Mengembalikan hasil pengecekan
    } catch (error) {
      return res.status(500).json({ error: true, message: 'Failed to check proxy.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
