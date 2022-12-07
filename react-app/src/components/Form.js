import React from "react";

export default function Form(props){
    const [formData, setformData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: false,
        favColor: ""
    })

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setformData(prevState => ({
            ...prevState, 
            [name]: type==="checkbox" ? checked : value
        }))
        
    }

    function handleSubmit(event){
        event.preventDefault()
        //submitToApi(formData)
        console.table(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='first name' 
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder='last name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
            />
            <input 
                type="email"
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <textarea 
                placeholder='Comments'
                name='comments'
                value={formData.comments} 
                onChange={handleChange}
            />
            <input 
                type="checkbox"
                id='isFriendly'
                name='isFriendly'
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor='isFriendly'>Are you friendly</label>
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name='employment'
                    value="unemployed"
                    checked={formData.employment === 'unemployed'}
                    onChange={handleChange}
                />
                <label htmlFor='unemployed'>Unemployed</label><br/>

                <input
                    type="radio"
                    id="employed"
                    name='employment'
                    value="employed"
                    checked={formData.employment === 'employed'}
                    onChange={handleChange}
                />
                <label htmlFor='employed'>Employed</label><br/>

            </fieldset>

            <select
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="blue">blue</option>
                <option value="black">black</option>
                <option value="yellow">yellow</option>
                
            </select>

                <button>Submit</button>
        </form>
    )
}