import {useState, useEffect} from "react"

export default function useDarkMode(){
    // save dark mode
    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        //controllare il tema scuro 
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        
        //imposta lo stato del dark mode
        setDarkMode(mediaQuery.matches);
        // console.log("questo è il match", mediaQuery.matches );

        //listener se l'utente cambia tema nel sistema
        const handleChange = (event) => setDarkMode (event.matches);
        // console.log("questo è l'evento match", event.matches );

        mediaQuery.addEventListener("change", handleChange);


        // cleanup
        return () => mediaQuery.removeEventListener("change", handleChange);
    },[]);

    return darkMode
}

