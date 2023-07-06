
import { StyledLink, StyledList } from './Navigation.styled'
export const Navigation: React.FC=()=>{
    const token = false;

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