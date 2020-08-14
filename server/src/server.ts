import express from 'express'
import http from 'http'
import socketIo from 'socket.io'
import routes from './router'
import cors from 'cors'

const PORT = 3333
const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.use(cors())
app.use(routes)

io.on('connection', (socket) => {
  console.log('New web socket conection')
})

server.listen(PORT, () => {
  console.log(`Server executando na porta ${PORT}`)
})
