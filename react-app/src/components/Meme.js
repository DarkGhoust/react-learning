import React from 'react';
import memesData from '../memesData';

console.log(memesData)

export default function Meme() {

    const [url, setUrl] = React.useState('no')
    const [things, setThings] = React.useState(['<p>Thing 1</p>', '<p>Thing 2</p>'])

    function getImage() {
        const memes = memesData.data.memes
        const randomNumber = Math.floor( Math.random() * memes.length )
        setUrl(memes[randomNumber].url)
    }
    function updateThings(){
        setThings((prevThings)=>{
            return [...prevThings, `<p>Thing ${prevThings.length + 1}</p>`]
        })
    }

    React.useState()

    return(
        <main>
            <div>
                <input type="text" placeholder='Top text'/>
                <input type="text" placeholder='Bottom text'/>
                <button onClick={getImage}>Get a new image</button>
                <img src={url} alt='meme'/>
                <button onClick={updateThings}>Add things</button>
                {things}
            </div>
        </main>
    )
  }