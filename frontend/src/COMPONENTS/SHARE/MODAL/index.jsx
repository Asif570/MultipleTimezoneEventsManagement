import ProfileUpdateForm from "../../PROFILE_UPDATE_FORM/index";
import RegisterForm from "../LOGIN_REGISTER_FORM";

const Modal = ({
  login = false,
  loginHundeler,
  registerHundeler,
  setloginhundeler,
  setregisterhundeler,
  pedit,
  EditProfile,
  pedithundeler,
}) => {
  return (
    <div>
      {pedit ? (
        ""
      ) : (
        <RegisterForm
          login={login}
          registerHundeler={registerHundeler}
          loginHundeler={loginHundeler}
          setloginhundeler={setloginhundeler}
          setregisterhundeler={setregisterhundeler}
        />
      )}
      {pedit ? (
        <ProfileUpdateForm
          EditProfile={EditProfile}
          pedithundeler={pedithundeler}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Modal;
