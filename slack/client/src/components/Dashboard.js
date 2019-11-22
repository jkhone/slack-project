import React from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'

export default props => {
    const { username, signout } = useAuth()

    return (
        <div>
            <h1>Hello {username}</h1>
            <Link to='/about' >About me</Link> 
            <button onClick={e => signout()}>Signout</button>
        </div>
    )
}