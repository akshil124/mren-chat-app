import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Chatpage() {
    const [chats, setChats] = useState([])
    const fetchchats = async () => {
        const data = await axios.get("/api/chat")
        setChats(data.data)

    }

    useEffect(() => {
        fetchchats()
    }, [])

    return (
        <div>{console.log("chats", chats)}</div>
    )
}

export default Chatpage