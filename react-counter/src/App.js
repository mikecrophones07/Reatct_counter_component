import React from 'react';
import CounterWithReduce from './component/Counter/CounterWithReducerState'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    };
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <CounterWithReduce/>
        </header>
      </div>
    );
  }

}

export default App;
