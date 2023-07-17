import { selectAuthToken } from "../../redux/auth/auth.selectors";
import { useAppSelector } from "../../redux/hooks/hooks";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation"
import { UserMenu } from "../UserMenu/UserMenu";
import { HeaderStyled } from "./AppBar.styled";

export const AppBar:React.FC =()=>{

    const token = useAppSelector(selectAuthToken)
    return (
        <HeaderStyled>
            <Navigation/>
            {token ? <UserMenu/> : <AuthNav/>}
        </HeaderStyled>
    )
}