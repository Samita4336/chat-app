import React, { useEffect } from 'react'
import useConversation from "../zustand/useConversation"
import { useSocketContext } from "../context/SocketContext"

import notficationSound from "../assets/sound/notification.mp3"

const useListenMessage = () => {

    const { messages, setMessages } = useConversation()
    const { socket } = useSocketContext()
    
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notficationSound);
            sound.play();
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage");
    }, [socket, messages, setMessages])
}

export default useListenMessage