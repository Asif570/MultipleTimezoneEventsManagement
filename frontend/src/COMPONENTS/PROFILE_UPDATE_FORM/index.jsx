import { useState } from "react";

const ProfileUpdateForm = ({ EditProfile, pedithundeler }) => {
  const [state, setState] = useState({});
  const onchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    EditProfile(state);
    pedithundeler(false);
    setState({});
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <h3>Edit Profile</h3>
        <div>
          <label htmlFor="name">Enter New Name</label>
          <input type="text" name="name" onChange={onchange} />
        </div>
        <div>
          <label htmlFor="tittle">Enter Clock Tittle</label>
          <input type="text" name="tittle" onChange={onchange} />
        </div>
        <div>
          <label htmlFor="password">Enter Old password</label>
          <input type="password" name="password" onChange={onchange} />
        </div>
        <div>
          <label htmlFor="Npassword">Enter New Password</label>
          <input type="password" name="Npassword" onChange={onchange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default ProfileUpdateForm;
