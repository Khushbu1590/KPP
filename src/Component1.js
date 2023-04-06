import { useState } from "react";
import Component2 from './Component2.js'
import Usercontext from './Usercontext.js'

function Component1() {
    const [user, setUser] = useState("Hello World");
  
    return (
      <>
            <Usercontext.Provider value = {user}>
<h1> {`Hey ${user}`} </h1>
<Component2 />
      </Usercontext.Provider>
     
     
      </>
    );
  }
  export default Component1;