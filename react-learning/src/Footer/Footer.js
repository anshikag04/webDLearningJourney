import { useState } from "react"

function Footer() {
    let [count, setCount] = useState(15)
    return(
        <div>
            <button onClick={() =>{setCount(count-1)}}>DECREASE</button>
            Value : {count} 
            <button onClick={() =>{setCount(count+1)}}>INCREASE</button>
        </div>
    )
}
export default Footer;