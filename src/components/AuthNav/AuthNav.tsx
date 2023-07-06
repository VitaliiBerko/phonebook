

// import { StyledNavLink } from 'components/Layout/layout.styled';
import { useLocation } from 'react-router-dom';
import { StyledLink } from '../Navigation/Navigation.styled';
import { Wrapper } from '../UserMenu/UserMenu.styled';


export const AuthNav = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <li>
        <StyledLink to="/register" state={{ from: location }}>
          Join
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/login" state={{ from: location }}>
          Login
        </StyledLink>
      </li>
    </Wrapper>
  );
};
