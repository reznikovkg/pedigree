const express = require('express')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 5000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})
const extractToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  if (authHeader && authHeader.startsWith('Bearer ')) {
    req.token = authHeader.substring(7)
  }
  next()
}
app.use(extractToken)

app.get('/games', async (req, res) => {
  const { search, fields, limit } = req.query
  try {
    const response = await axios.get('https://api.igdb.com/v4/games', {
      headers: {
        'Client-ID': 'whufib38vwkfml7q55c8fh3cyo4gac',
        'Authorization': `Bearer ${req.token}`
      },
      params: {
        search,
        fields,
        limit
      }
    })
    res.json(response.data)
  } catch (error) {
    console.error('Error searching games:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/api/games/:id', async (req, res) => {
  const { id } = req.params
  try {
    const response = await axios.get(`https://api.igdb.com/v4/games/${id}`, {
      headers: {
        'Client-ID': 'whufib38vwkfml7q55c8fh3cyo4gac',
        'Authorization': `Bearer ${req.token}`
      },
      params: {
        fields: 'name, first_release_date, cover.url'
      }
    })
    res.json(response.data)
  } catch (error) {
    console.error('Error getting game by ID:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})