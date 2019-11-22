import React from 'react'
import { useAuth } from '../hooks'

export default props => {
    const { username } = useAuth()

    return (
        <div>
            <h1>My name is {username}</h1>
        </div>
    )
}