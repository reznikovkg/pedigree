const express = require('express')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 3000
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
const getTokenFromHeader = (req) => {
  return req.headers.authorization.split(' ')[1];
};
// Маршрут для поиска игр
app.get('/games', async (req, res) => {
  const { search, fields, limit } = req.query;
  try {
    const token = getTokenFromHeader(req)
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const response = await axios.get('https://api.igdb.com/v4/games', {
      headers: {
        'Client-ID': 'woseljwooiibxtg7zxgihp42fvvkz5',
        'Authorization': `Bearer ${token}`
      },
      params: {
        search,
        fields,
        limit
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error searching games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Маршрут для получения игры по ID
app.get('/api/games/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const token = getTokenFromHeader(req)
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    const response = await axios.get(`https://api.igdb.com/v4/games/${id}`, {
      headers: {
        'Client-ID': 'woseljwooiibxtg7zxgihp42fvvkz5',
        'Authorization': `Bearer ${token}`
      },
      params: {
        fields: 'name, first_release_date, cover.url'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error getting game by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
