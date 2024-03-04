import { useState, useRef, useEffect } from "react";

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);
    const {setRef} = useRef()

    const toggle = () => {
        setValue(!value)
    };

    return [value, toggle]
}

export {useToggle}