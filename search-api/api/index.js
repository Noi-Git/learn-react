import express from 'express'
const app = express()
import cors from 'cors'

app.use(cors())

app.get('/', (req, res) => {})

app.listen(5000, () => console.log('Server is listening on port 5000'))
