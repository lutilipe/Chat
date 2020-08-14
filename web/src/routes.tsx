import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Chat} path="/chat" />
    </BrowserRouter>
  )
}

export default Routes
