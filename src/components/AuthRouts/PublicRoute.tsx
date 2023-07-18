import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectAuthToken } from "../../redux/auth/auth.selectors"
import { useAppSelector } from "../../redux/hooks/hooks"


export const PublicRoute: React.FC=()=> {
    const token = useAppSelector(selectAuthToken);
    const location = useLocation();

    return token ? (
        <Navigate to ={location?.state?.from ?? '/'} replace/>
    ) : (<Outlet/>)
}