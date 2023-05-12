import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { database, auth } from "../firebase/firebaseConfig";

const Chat = ({ room }) => {
  const [msg, setMsg] = useState("");
  const [myMsg, setMyMsg] = useState([]);

  const messagesRef = collection(database, "messages");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!msg) return;
    addDoc(messagesRef, {
      text: msg,
      user: auth.currentUser.displayName,
      room: room,
      createdAt: serverTimestamp(),
    });

    setMsg("");
  };

  useEffect(() => {
    const queryMsg = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    onSnapshot(queryMsg, (snapshot) => {
        let sentMsg=[];
      snapshot.forEach((doc) => {
        sentMsg.push({...doc.data(), id:doc.id});
      });
      setMyMsg(sentMsg);
    });
  }, []);

  return (
    <div className="chat">
      <div className="chat-info">
        <p>{auth.currentUser.displayName}</p>
        <h2>{room}</h2>
        <a href="/">Home Page</a>
      </div>
      <div className="chat-messages">
        {myMsg.map((item)=>(
           <>
            {
                auth.currentUser.displayName==item.user?(
                    <p className="byMe" key={item.id}>{`${item.text}`}</p>
                ):(
                    <p className="byMe" key={item.id}> <span className="others">${item.user}</span>: <span>{item.text}</span></p> 
                )
            }
            
           </>
            // <p key={item.id}>{`${item.user}: ${item.text}`}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          value={msg}
          placeholder=" type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
