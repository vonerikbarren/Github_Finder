# Components, Props, and Prop Types

# Table of Contents:
- FontAwesome Information
- Props with a Component
- Props with an icon
- Default Props
- Prop Types

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

### Example 1A - Props with  a component
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

### Example 1C - Creating Defualt Props
> Here we can set static props by defining them as methods. Remember this is 
> probably strictly only for class-based components so only use as such. 
> Here we do not need to define the props within the component within App.js 
> because we have defined them to be the default within Navbar.js

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
        <Navbar />
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
  // defaultProps
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

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


### Example 1D - Prop Types
> bring in propTypes with this shortcut = impt
> So basically what this does, is it gives props a specific data type. 
> If a dataType does NOT match for the same prop then error. It will still
> go through but a warning shows in the console. 
> An example of this will be below:


[Navbar.js]-[####################################]
``` js
// |# Header|
// 

// Just typed rce to get the react class component to show. 

import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // defaultProps
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

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

    const numbers = [1, 2, 3, 4];

    return (
      <div className='App'>
        <Navbar title={numbers} />
      </div>
    )
  }


}


export default App;


```






