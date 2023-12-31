// import { useDispatch, useSelector } from "react-redux"
// import { selectName } from "redux/auth/auth.selector";
// import { logOut } from "redux/auth/auth.slice";
// import styles from '../common.module.css'

import { selectName } from "../../redux/auth/auth.selectors";
import { logOut } from "../../redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Button } from "../Button/Button";
import { Wrapper } from "./UserMenu.styled";

export const UserMenu: React.FC = () => {
  const dispath = useAppDispatch();
  const name = useAppSelector(selectName);

  const handlLogOut = () => {
    dispath(logOut());
  };

  return (
    <Wrapper>
      <h2>
        Welcome,
        {name}!
      </h2>
      <img
        src="https://img.icons8.com/arcade/64/null/rick-sanchez.png"
        alt="user"
      />

      <Button type="button" onClick={handlLogOut} variant="logOutBtn">
        Log out
      </Button>
    </Wrapper>
  );
};
