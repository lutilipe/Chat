import React from 'react'
import io from 'socket.io-client'
import Routes from './routes'

const socket = io('http://localhost:3333')

socket.on('connect', () => {
  console.log('Connected')
})

function App() {
  return <Routes />
}

export default App
