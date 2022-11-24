import React, { useState } from "react";

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(email && password) alert(`User ${email} logged in!`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input 
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <br/>
            <label>Password:
                <input 
                    type="password"
                    value={password}
                    onChange = { e => setPassword(e.target.value) }
                />
            </label>
            <br/>
            <input type="submit" value="Log In" />
        </form>
    );
}