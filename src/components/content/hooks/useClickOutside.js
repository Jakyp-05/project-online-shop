import { useRef, useEffect } from "react";

function useClickOutside(callback) {
    const {sortRef} = useRef(null)

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());

        if (!path.includes(sortRef.current)) {
            callback(false);
        }
    };

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick)

		return () => {
			document.body.addEventListener('click', handleOutsideClick)
		}
	}, [callback])

    return sortRef
}

export {useClickOutside}