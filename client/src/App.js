// # Github Finder App
// ##############################################
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import './App.css'

class App extends Component {

  // This space is used for methods (Remember  this is a class)
  // So this area below would be this.method.  to be  seen. 

  render() {
    //  This  area is used for regular js and can be used in the return via {}.


    return (
      <div className='App'>
        <Navbar title="Github Finder" icon="fab fa-github" />
      </div>
    )
  }


}


export default App;
