import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from "miragejs"
import App from './App';

createServer({
  models: {
    
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return[
        {
          id: 1,
          title: "transactions 1",
          amount: 400,
          type: "deposit",
          category: "food",
          createdAt: new Date()
        }
      ]
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return(data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


