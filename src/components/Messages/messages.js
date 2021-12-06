import React, { useState, useEffect } from "react";
import { callAPI } from "../../api";

const Messages = ({ token, userData }) => {
  const [myMessages, setMessages] = useState([]);

  useEffect(async () => {
    try {
      const userMessages = userData.messages;
      setMessages(userMessages);
      console.log(
        myMessages.map((message) => {
          console.log(message.fromUser.username);
        })
      );
      return;
    } catch (error) {
      console.log("error getting messages", error);
    }
  }, []);

  return (
    <section className="box">
      <h2>Messages</h2>
      <div className="messages-container">
        {myMessages.map((message) => {
          <div className="messageLog" key={message._id}>
            <h3> {message.fromUser.username}</h3>
          </div>;
        })}
      </div>
    </section>
  );
};

export default Messages;
