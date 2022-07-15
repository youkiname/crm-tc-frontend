import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ children }) {
    const token = localStorage.getItem("token-admin")
    let location = useLocation();

    if (!token) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    } else {
        return children;
    }
}