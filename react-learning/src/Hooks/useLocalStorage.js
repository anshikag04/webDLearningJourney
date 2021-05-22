import { useState } from "react"

function useLocalStorage(initialValue) {
    let [value, setValue] = useState(initialValue)

    return [value, setValue]
}

export default useLocalStorage

// localstorage.setitem
// localstorage.getitem
// localstorage.removeitem