const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.send({message: "Welcome to the Piercings Store!"})
})

app.listen(PORT, () => {
  console.log(`\n⚡ Server running on http://localhost:${PORT}\n`)
})
