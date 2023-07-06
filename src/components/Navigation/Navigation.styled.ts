

import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const StyledLink = styled(NavLink)`
    appearance: none;
  backface-visibility: hidden;
  
  border-radius: 10px;
  border: 1px solid #2f80ed;
  box-shadow: none;
  box-sizing: border-box;
  color: black;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 14px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:hover {
    background-color: #1366d6;
    color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0 5px 30px, rgba(0, 0, 0, 0.05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: 0.35s;
  }

  &:hover:after {
  opacity: 0.5;
}

  &.active {
    background-color: #2f80ed;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,
    rgba(0, 0, 0, 0.1) 0 1px 4px -1px;
  /* transform: translateY(2px); */
  transition-duration: 0.35s;
  }

  &:active:after {
  opacity: 1;
}

@media (min-width: 768px) {
  .button-65 {
    padding: 14px 22px;
    width: 176px;
  }
}

  
`;

export const StyledList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 24px;
`