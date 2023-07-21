import { nanoid } from "nanoid";
import { useState } from "react";
import { logIn } from "../../../redux/auth/auth.operations";
import Loader from "../../Loader/Loader";
import { selectIsLoading } from "../../../redux/auth/auth.selectors";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { ButtonEyeLogin, Form, SvgEye } from "../Form.styled";
import { Button } from "../../Button/Button";
import icon from "../../../images/Icons/icons.sprite.svg";

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPass, setIsPass] = useState(true);

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const { email, password } = form.elements as typeof form.elements & {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    const userEmail = email.value;
    const userPassword = password.value;

    dispatch(logIn({ email: userEmail, password: userPassword }));
    setEmail("");
    setPassword("");
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={handleOnSubmit}>
      <label htmlFor={emailInputId}>Email</label>
      <input
        id={emailInputId}
        type="email"
        name="email"
        required
        value={email}
        onChange={handleChange}
      />
      <label htmlFor={passwordInputId}>Password</label>
      <input
        id={passwordInputId}
        type={isPass ? "password" : "text"}
        name="password"
        title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={password}
        onChange={handleChange}
      />
      <ButtonEyeLogin
        type="button"
        onClick={() => (isPass ? setIsPass(false) : setIsPass(true))}
      >
        {isPass ? (
          <SvgEye>
            <use xlinkHref={`${icon}#closed-eye`}></use>
          </SvgEye>
        ) : (
          <SvgEye>
            {" "}
            <use xlinkHref={`${icon}#opened-eye`}></use>
          </SvgEye>
        )}
      </ButtonEyeLogin>

      <Button type="submit" variant="addBtn">
        LogIn
      </Button>
    </Form>
  );
};
