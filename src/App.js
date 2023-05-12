import { useState, useRef } from "react";
import Auth from "./components/auth";
import Chat from "./components/chat";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState("");
  const inputRef = useRef(null);

  if (!isAuth) {
    return (
      <div className="container">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room-container">
          <h1>Chat Room</h1>
          <p>Choose a room</p>
          <input
            ref={inputRef}
            type="text"
            placeholder="type the room name..."
          />
          <div className="buttons">
            <button
              onClick={() => setRoom(inputRef.current.value)}
              className="submit"
            >
              Submit
            </button>
            <button className="logout">LogOut</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
