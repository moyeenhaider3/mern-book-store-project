import { SnackbarProvider } from 'notistack'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
export const serverUrl = "https://book-store-api-glyr.onrender.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>,
)
