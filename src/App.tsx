import React from 'react';
import './App.css';
import ComA from './components/Com-A'
import { Card  , Button } from 'antd'
class App extends React.Component {
  comAInputChange(val:any){
    console.log('comA-input',val)
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p className={"width-100"}>color</p>
          <ComA msg="msg-a" onInputChange={this.comAInputChange} />
          <Button>button</Button>
          <Card >11111</Card>
        </header>
      </div>
    );
  }
}

export default App;
