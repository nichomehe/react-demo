import React from 'react';
import './App.css';
import ComA from './components/Com-A'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <ComA msg="aaaaaa"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
