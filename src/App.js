import { useState } from "react";
import Auth from "./components/auth";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  if (!isAuth) {
    return (
      <div className="container">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }
  return <div className="container">
    <div className="room-container">
      <h1>Chat Room</h1>
      <p>Choose a room</p>
      <input type="text" placeholder="type the room name..."/>
      <div className="buttons">
      <button className="submit">Submit</button>
      <button className="logout">LogOut</button>
      </div>
    </div>
  </div>;
}

export default App;
