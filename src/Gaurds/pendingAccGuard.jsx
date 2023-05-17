import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTS } from "../consts";

const PendingAccGuard = ({ children }) => {
  const { isAuth, isSet } = useSelector((state) => state.auth);
  if (isAuth && !isSet) {
    return <Navigate to={ROUTS.SIGNUP} />;
  } else {
    return children;
  }
};
export default PendingAccGuard;
