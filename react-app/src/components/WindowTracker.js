import React from "react";

export default function App(props){
    const [showWindow, setShowWindow] = React.useState(true)

    React.useEffect( ()=>{
        if(props.darkMode){
            document.body.classList.remove("light")
            document.body.classList.add("dark")
            return
        }
            document.body.classList.remove("dark")
            document.body.classList.add("light")
    }, [props.darkMode])

    return(
        <div className="container">
            <button onClick={props.toggleDarkMode}>Enable DarkMode</button>
            <button onClick={() => setShowWindow(!showWindow)}>Toggle window width</button>
            {showWindow && <WindowTracker />}
        </div>
    )
} 

function WindowTracker(){
    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(()=>{
        function watchWidth(){
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)
        return function(){
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return(
        <h1>Width: {width}</h1>
    )
}