/* eslint-disable no-unused-vars */
import React from 'react';
import Form from './Form';        

export default function App() {

    const [allMemes, setAllMemes] = React.useState([])

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "image"
    })

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json() )
        .then(memesArray => {
            setAllMemes(memesArray.data.memes)
        })  
    }, [])

    function getImage() {
        const randomNumber = Math.floor( Math.random() * allMemes.length )
        setMeme((prevState) =>{
            return{
                ...prevState,
                randomImage: allMemes[randomNumber].url
            }
        })
    }
    console.log(meme)

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState =>({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <main>
            <div>
                <input onChange={handleChange} name="topText" type="text" placeholder='Top text' value={meme.topText}/>
                <input onChange={handleChange} name="bottomText" type="text" placeholder='Bottom text' value={meme.bottomText}/>
                <button onClick={getImage}>Get a new image</button>
                <div>
                    <img src={meme.randomImage} alt='meme' width="500px"/>
                    <h3 className='meme-text top'>{meme.topText}</h3>
                    <h3 className='meme-text bottom'>{meme.bottomText}</h3>
                </div>
                <br/>
                <br/>
                <h1>Form</h1>
                <Form />
            </div>
        </main>
    )

    // const [dataStarWars, setDataStarWars] = React.useState({})
    // const [count, setCount] = React.useState(1) 
    
    // React.useEffect(() =>{
    //     fetch("https://swapi.dev/api/people/" + count)
    //         .then(res => res.json() )
    //         .then(data => setDataStarWars(data))  
    // }, [count])
    // console.log(count)

    // return(
    //     <div>
    //         <pre>{JSON.stringify(dataStarWars, null, 2)}</pre>
    //         <button onClick={ () =>{setCount(count + 1)} } >Load next character</button>
            
    //     </div>
    // )
  }