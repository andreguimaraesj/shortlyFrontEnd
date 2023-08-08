import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function SignOutOutlet() {
  const { auth } = useAuth();
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/ranking" />;
}

export { SignOutOutlet };
