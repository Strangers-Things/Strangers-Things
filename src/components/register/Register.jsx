import './Register.css'
import { registerUser } from '../../API'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Regsiter({ loggedIn, setLoggedIn }){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function submit(event){
        event.preventDefault()

        try {
            let result = await registerUser(username, password)

            localStorage.setItem('token', result.token)
            setLoggedIn(true)
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <form onSubmit={submit}>
                <label htmlFor='username'>Username:</label>
                <input
                 name='username'
                 type='text'
                 placeholder='Enter Username Here'
                 value={username}
                 onChange={(event) => {
                    setUsername(event.target.value)
                 }}></input>

                <label htmlFor='password'>Password:</label>
                <input
                 name='password'
                 type='password'
                 placeholder='Enter Username Here'
                 value={password}
                 onChange={(event) => {
                    setPassword(event.target.value)
                 }}></input>

                 <button type='submit'>Register</button>
            </form>
        </div>
    )
}