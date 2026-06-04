const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.send(`Server is running on port ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`\n⚡ [server] Server running on http://localhost:${PORT}\n`)
})
