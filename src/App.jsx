import React from 'react';

import LogIn from './components/auth';
import Header from './components/header';
import RequestsBar from './components/request-bar';
import QueryResponse from './pages/query-response';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <RequestsBar />
      <LogIn /> */}

      <QueryResponse />
    </div>
  );
}

export default App;
