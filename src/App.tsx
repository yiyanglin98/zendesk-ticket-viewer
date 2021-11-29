import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import ListView from './screens/ListView';
import DetailView from './screens/DetailView';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

export const TicketContext = createContext<ticketsJSON | undefined>(undefined);

interface ticketsJSON {
  count: number,
  tickets: Array<any>,
  error?: string
}

function App() {
  const [ticketsObject, setTicketsObject] = useState<ticketsJSON | undefined>()

  useEffect(() => {
    async function getTicketData() {
      try {
        const response = await axios.get('http://localhost:3001/api/tickets', { timeout: 8000 })
        console.log(response)
        setTicketsObject(response.data)
      } catch (error) {
        console.error(error);
        setTicketsObject({ error: "Cannot connect to the server!", count: 0, tickets: [] })
      }
    }
    getTicketData()
  }, [])

  return (
    <TicketContext.Provider value={ticketsObject}>
      <div className="App">
        <h1 className="font-serif italic text-4xl text-gray-500 bg-gray-200 font-light p-1">Zendesk Ticket Viewer by Yiyang Lin</h1>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path=":ticketId" element={<DetailView />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>404: The page does not exist!</p>
            </main>
          }
          />
        </Routes>

      </div>
    </TicketContext.Provider>

  );
}

export default App;
