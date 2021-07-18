import React, {useState} from 'react'
export default function useDebounce() {
    
    const [clerTimeout, setclearTimeout] = useState("")

    function debounce(func, wait=1000){
        clearTimeout(clerTimeout)
        const timout = setTimeout(() => func(), wait)
        setclearTimeout(timout)
    }
    return debounce

}
