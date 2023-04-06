import React, {useReducer} from "react";

function Example3(){
const[sum,dispatch]=useReducer((state,action)=>{
    return state*action;
},0);

return(
    <>
    <button onClick={()=>dispatch(1)}>Add 1</button>
    </>
)
}
export default Example3;