import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTS } from "../consts";

const AuthGuard = ({ children }) => {
  const { isAuth, isSet } = useSelector((state) => state.auth);

  if (isAuth && isSet) {
    return <Navigate to={ROUTS.HOME} />;
  } else {
    return children;
  }
};
export default AuthGuard;
