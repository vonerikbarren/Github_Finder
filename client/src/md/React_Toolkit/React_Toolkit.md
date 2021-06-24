# React ToolKit

# Templates
``` js
// |# Header|
// 


```

# Class-based Components
> This section is specifically for the class-based Components 
> which are a vital foundational piece of React. 

> The js data below shows several things we can do in a class based Component. 

## Example 1 - How logic works in React Part 1

``` js
// |# Header|
//

// # Github Finder App
// ##############################################
import React, { Component } from 'react';
import './App.css'

class App extends Component {

  // This space is used for methods (Remember  this is a class)
  // So this area below would be this.method.  to be  seen. 

  render() {
    //  This  area is used for regular js and can be used in the return via {}.


    const loading = true;

    if (loading) {
      return <h4>Loading...</h4>
    }
    return (
      <div className='App'>
        <h1></h1>
      </div>
    )
  }


}


export default App;
```

## Example 2 - How Logic Works in React #2





