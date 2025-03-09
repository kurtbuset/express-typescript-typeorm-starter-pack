import express from 'express'
import studentRouter from './students/students.controller'

const app = express()

app.use(express.json())

app.use('/api/students', studentRouter)

app.listen(3000, () => {
  console.log('listening on port 3000')
})   