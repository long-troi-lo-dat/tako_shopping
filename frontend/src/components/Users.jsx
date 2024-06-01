import { useState, useEffect } from 'react'
import axios from '../axios'
export const Users = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const res = await axios.get('/users', {
                    signal: controller.signal
                });
                console.log(res)
                isMounted && setUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUsers();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])
    return (
        <div>
            <h1>User</h1>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => {
                            return <li key={i}>{user?.username}</li>
                        })}
                    </ul>
                ) : <p>No users to display</p>
            }
        </div>
    )
}
