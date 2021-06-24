# Components, Props, and Prop Types

## Templates
``` js
// |# Header|
// 


```

## Fontawesome information
> Use this link inside the html file  to use icons and fonts 
> from fontawesome instantly. Had to use email and password to sign in. 

email => barrentucker***********
password => y!*******

https://fontawesome.com/kits/637cb87fe6/use?welcome=yes

<script src="https://kit.fontawesome.com/637cb87fe6.js" crossorigin="anonymous"></script>


## Props ----------------------------------------

### Example 1 - Props with  a component
> the files will be  depicted  with  the :
[file.js]-[######################################]
> signature. This is  how we will  separate the files. 
> And show the connection between two or more files  
> whether it is a component component.js and app.js or any other
> combination of files. 



[App.js]-[#######################################]
``` js
// |# Header|
// 

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
        <Navbar title="Github Finder" />
      </div>
    )
  }


}


export default App;



```

[Navbar.js]-[####################################]
``` js
// |# Header|
// 

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
        <Navbar title="Github Finder" />
      </div>
    )
  }


}


export default App;



```

### Example 1B - Props with the icon also. 
> This example shows that we can  use props not just with the component 
> itself but even icons can be passed through components. 


[Navbar.js]-[####################################]
``` js
// |# Header|
// 


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


```

[Navbar.js]-[####################################]
``` js
// |# Header|
// 


// Just typed rce to get the react class component to show. 

import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar;


```
