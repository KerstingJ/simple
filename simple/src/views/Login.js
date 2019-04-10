import React, {useState} from 'react'
// this issss the login page!!!

export default function(props){

    let [formFields, setFormFields] = useState({username: "", password: ""})

    const handleInput = event => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value
        })
    }

    const validate = event => {
        event.preventDefault();
        // this needs to eventually connect to a server where it can check if username exists
        // also needs to be abe 

        let username = formFields.username.trim();
        let password = formFields.password.trim();

        let isValidUsername = (username.length >= 3 && username.search(new RegExp('\\W')) < 1)
        let isValidPassword = (password.length >= 8)
        
        setFormFields({
            username: isValidUsername ? username : "",
            password: isValidPassword ? password : ""
        })

        return (isValidUsername && isValidPassword)
    }

    return(
        <div>
            This is my Login View
            {/* logo */}
            {/* login form */}
            <form onSubmit={(event) => {validate(event) && props.login()}}>
                <input
                    name="username"
                    placeholder="Username"
                    value={formFields.username}
                    onChange={handleInput}
                />
                <input
                    name="password"
                    placeholder="Password"
                    value={formFields.password}
                    onChange={handleInput}
                    type="password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}