import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Auth = ({ setIsAuth }) => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("token", res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth">
      <h1>Click to Continiue:</h1>
      <button onClick={signIn}>Login with google</button>
    </div>
  );
};

export default Auth;
