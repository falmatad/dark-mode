import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";



export const useDarkMode = (key, initialValues) => {

    const [value, setVlue] = useLocalStorage(
        key,
        initialValues
    );

    useEffect( () => {
            if (value === true) {
            document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
    },[value])

    return [value, setVlue]
}