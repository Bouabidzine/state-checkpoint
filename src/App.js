// import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Person from './component/Person';

class App extends Component { 
  render (){ return (
    <div className="App">
      <Person />
    </div>
  );
}
}
export default App;
