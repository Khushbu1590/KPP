import React,{ useState } from 'react';
import axios from 'axios';


function Example() {
const [joke,setJoke]=useState("");

const fetchJoke = () =>{

    axios
    .get("https://official-joke-api.appspot.com/random_joke")
    .then((response) =>{
        const{setup, punchline}= response.data;
        setJoke(`${setup} ${punchline}`);
    })
    .catch((error) => {
        console.error(error);
    });
};

return(
    <div>

<h1>Random Joke generator</h1>
<button onClick={fetchJoke}>Click</button>
<p>{joke}</p>
    </div>
)
}
export default Example;