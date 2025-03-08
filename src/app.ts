import express, { Request, Response } from 'express'

const app = express()

app.get('/api', (req: Request, res: Response) => {
  return res.send('woah')
})



app.listen(3000, () => {
  console.log('port running on 3000')
})