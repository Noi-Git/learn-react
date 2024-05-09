import express from 'express'
const app = express()
import cors from 'cors'
import { Users } from './users.js'

app.use(cors())

app.get('/', (req, res) => {
  res.json(User)
})

app.listen(5001, () => console.log('Server is listening on port 5001'))
