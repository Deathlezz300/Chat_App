import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChatApp } from './ChatApp'
import { store } from './store/store'
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChatApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
