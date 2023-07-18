import { Navigate, Outlet } from "react-router-dom";
import { selectAuthToken } from "../../redux/auth/auth.selectors"
import { useAppSelector } from "../../redux/hooks/hooks"



export const PrivateRoute: React.FC=()=>{
    const token = useAppSelector(selectAuthToken);
    return token ? <Outlet/> : <Navigate to='login' replace/>
}