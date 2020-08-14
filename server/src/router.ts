import express from 'express'

const routes = express.Router()

routes.get('/teste', (req, res) => {
  res.status(200).send({ message: 'Hello Worlds' })
})

export default routes
