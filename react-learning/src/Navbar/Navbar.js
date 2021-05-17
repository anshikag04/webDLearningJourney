import { useState } from "react";

function Navbar(props){
    let [counter, setCounter] = useState(70)
    // counter = 70
    // function setCounter(value){ // counter=value}
    // return [counter, setCounter]
    return(
        <div>
                VALUE: {counter}
                <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
        </div>
    )
}
export default Navbar;
