import { nanoid } from "nanoid";

import { joinUser } from "../../redux/auth/auth.operations";
import { selectIsLoading } from "../../redux/auth/auth.selectors";
import Loader from "../Loader/Loader";
import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

export const JoinForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

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
    const { name, email, password } = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    const userName = name.value;
    const userEmail = email.value;
    const userPassword = password.value;

    dispatch(
      joinUser({ name: userName, email: userEmail, password: userPassword })
    );

    setName("");
    setName("");
    setEmail("");
    setPassword("");
  };

  return isLoading ? (
    <Loader />
  ) : (
    <form
      onSubmit={handleOnSubmit}
      // className={s.form}
    >
      <label htmlFor={nameInputId}>Name</label>
      <input
        // className={s.input}
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <label htmlFor={emailInputId}>Email</label>
      <input
        // className={s.input}
        id={emailInputId}
        type="email"
        name="email"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Email must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={email}
        onChange={handleChange}
      />
      <label htmlFor={passwordInputId}>Password</label>
      <input
        // className={s.input}
        id={passwordInputId}
        type="password"
        //   type={isPass ? 'password' : 'text'}
        name="password"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Password must be digits and have more then 7 characters and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Your password must be 7 characters or longer."
        required
        value={password}
        onChange={handleChange}
      />

      <button className="btn btn-primary" type="submit">
        Join
      </button>
    </form>
  );
};
