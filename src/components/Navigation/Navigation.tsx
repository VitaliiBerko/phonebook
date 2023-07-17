
import { selectAuthToken } from '../../redux/auth/auth.selectors';
import { useAppSelector } from '../../redux/hooks/hooks';
import { StyledLink, StyledList } from './Navigation.styled'
export const Navigation: React.FC=()=>{
    const token = useAppSelector(selectAuthToken);

    return (
        <nav>
            <StyledList>
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                </li>
                <li>
                  { token && <StyledLink to ='contacts'>Contacts</StyledLink>}
                </li>
            </StyledList>
        </nav>
    )
}