import React from 'react';
import './App.css';
import Toy from './components/Toy/Toy.component';
import { ClientProvider } from './Context/ClientContext.component';

function App() {
  return (
    <div className="App">
      <ClientProvider childComponent={<Toy />}>

      </ClientProvider>
    </div>
  );
}

export default App;