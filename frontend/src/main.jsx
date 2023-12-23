import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
export const serverUrl = "http://localhost:5555";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
)
