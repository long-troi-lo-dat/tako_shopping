import axios from '../axios';
import React, { useEffect } from 'react'

function User() {
    const handleAuth = () => {
        axios.get("/checkauth", {
            headers: {
                'access-token': localStorage.getItem("token")
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        handleAuth()
    }, []);
    
    return (
        <div>User</div>
    )
}

export default User