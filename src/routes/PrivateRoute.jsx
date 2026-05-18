import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const {
    user,
    loading,
  } = useAuth();

  const location = useLocation();

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // If User Exists
  if (user) {
    return children;
  }

  // Redirect To Login
  return (
    <Navigate
      to="/login"
      state={location.pathname}
    />
  );
};

export default PrivateRoute;