import { useState } from "react";

const RegisterForm = ({
  login = false,
  loginHundeler,
  registerHundeler,
  setregisterhundeler,
  setloginhundeler,
  pEdit,
}) => {
  const [state, setState] = useState({});
  const onchangehundeler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const onsubmithundeler = (e) => {
    e.preventDefault();
    if (login) {
      loginHundeler(state);
      setloginhundeler(false);
    } else {
      registerHundeler(state);
      setregisterhundeler(false);
    }
  };
  return (
    <form onSubmit={onsubmithundeler}>
      <h2>{login ? "Login" : "Register"}</h2>
      <div>
        <label htmlFor="name">Enter Your Name</label>
        <input type="text" name="name" onChange={onchangehundeler} />
      </div>

      {login ? (
        <>
          <div>
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              name="password"
              onChange={onchangehundeler}
            />
          </div>
          <button>Login</button>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              name="password"
              onChange={onchangehundeler}
            />
          </div>
          <div>
            <label htmlFor="cpassword">Confrom Your Password</label>
            <input
              type="password"
              name="cpassword"
              onChange={onchangehundeler}
            />
          </div>
          <button>Register</button>
        </>
      )}
    </form>
  );
};
export default RegisterForm;
