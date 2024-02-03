import React from 'react';
import './App.css';
import MyEditor from './components/MyEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="title">Demo Editor by Shivakanya Kawale</h1>
        </div>
      </header>
      <main className="editor-container"></main>
      <main>
        <MyEditor />
      </main>
    </div>
  );
}

export default App;
