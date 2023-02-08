import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { InfoContextProvider } from 'context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <InfoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InfoContextProvider>
  </React.StrictMode>
)
