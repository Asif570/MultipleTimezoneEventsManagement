import { useState } from "react";
import Modal from "../SHARE/MODAL";

const Login = ({
  loginHundeler,
  registerHundeler,
  logouthundeler,
  EditProfile,
}) => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [pedit, setPedit] = useState(false);
  const setloginhundeler = () => {
    setLogin(!login);
    setRegister(false);
  };
  const setregisterhundeler = () => {
    setRegister(!register);
    setLogin(false);
  };
  const pedithundeler = () => {
    setPedit(!pedit);
  };
  const user_name = localStorage.getItem("user_name");
  const logged = user_name ?? false;
  return (
    <div>
      {logged ? (
        <>
          <p>
            <b>{user_name}</b>
          </p>
          <button onClick={logouthundeler}>Logout</button>
          <button onClick={pedithundeler}>Edit Profile</button>
        </>
      ) : (
        <>
          <button onClick={setregisterhundeler}>Register</button>
          <button onClick={setloginhundeler}>Login</button>
        </>
      )}
      {login ? (
        <Modal
          login={true}
          loginHundeler={loginHundeler}
          setloginhundeler={setloginhundeler}
        />
      ) : (
        ""
      )}
      {register ? (
        <Modal
          registerHundeler={registerHundeler}
          setregisterhundeler={setregisterhundeler}
        />
      ) : (
        ""
      )}
      {pedit ? (
        <Modal
          pedit={pedit}
          EditProfile={EditProfile}
          pedithundeler={pedithundeler}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Login;
