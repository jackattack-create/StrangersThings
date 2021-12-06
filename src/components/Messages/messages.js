import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {callAPI} from '../../api'

const Messages = ({token, userData}) => {

    const [messages, setMessages] = useState([])

    const API_URL = `/users/me`;

    const getMessages = async (event) => {
        
        try {
            const data = await callAPI({
                url: API_URL,
                token,
            })
            const userMessages = data.data.messages;
            setMessages(userMessages)
        } catch (error) {
            console.log("error recieving messages", error)
        }
    }

    useEffect(async () => {
        if(token) {
            getMessages()
        }
    }, [])
    
    
    return(
        <section className="box">
          <h2>Messages</h2>  
          <div className="messages-container">
            {messages.map((message) => {
                <div className="messageLog">
                    <h3> {message.fromUser.username}</h3>
                </div>
            })}
          </div>
        </section>
    )
}

export default Messages