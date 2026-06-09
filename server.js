const express = require('express')
const app = express()
const PORT = 3001

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the Piercings Store!' })
})

app.get(['/piercing', '/piercings'], (req, res) => {
  res.json({ message: 'Listing all the piercings', piercings: [] })
})

app.post('/piercings', (req, res) => {
  res.json({
    message: 'Creating a new piercing',
    piercing: { id: Date.now(), name: 'Piercing A' }
  })
})

app.put('/piercings/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'Updating piercing',
    piercing: { id: id, name: 'Updated piercing' }
  })
})

app.delete('/piercings/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: 'Deleting the piercing', piercingId: id })
})

const checkAuth = (req, res, next) => {
  const authenticated = true
  if (authenticated) {
    next()
  } else {
    res.status(401).json({ message: 'Access denied' })
  }
}

app.get('dashboard', checkAuth, (req, res) => {
  res.json({ message: 'Welcome to the panel' })
})

app.listen(PORT, () => {
  console.log(`\n⚡ Server running on http://localhost:${PORT}\n`)
})

app.get('/about', (req, res) => {
  res.send({ message: 'Meet the Piercing Store' })
})
