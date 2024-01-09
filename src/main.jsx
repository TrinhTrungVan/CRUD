import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from '@/redux/store.js'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster />
    </Provider>
  </React.StrictMode>
)
