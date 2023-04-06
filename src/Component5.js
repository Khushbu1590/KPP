import {usercontext} from "react";
import Usercontext from "./Usercontext";

function Component5() {
    const user=usercontext(usercontext);

    return (
      <>
<h1> Component5 </h1>
<h2> {`Hey ${user}`}</h2>
     
     
      </>
    );
  }
  export default Component5;