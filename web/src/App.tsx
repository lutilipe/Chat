import React from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3333')

socket.on('connect', () => {
  console.log('Connected')
})

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  )
}

export default App
