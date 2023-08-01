import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { IContact } from "../../types/contatctsTypes";
import { Button } from "../Button/Button";
import { Form } from "./EditContact.styled";
import { Modal } from "../Modal/Modal";

interface IProps {
  toggleModal: () => void;
  contact: IContact;
}

export const EditContact = ({ toggleModal, contact }: IProps) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
   
    // const form = evt.target as HTMLFormElement;
    // const {name, number}= form.elements as typeof form.elements & {
    //   name: HTMLInputElement;
    //   number: HTMLInputElement
    // }; 

    // const contactName = name.value;
    // const contactNumber = number.value;    

    
   
  };

  return (
    <Modal toggleModal={toggleModal}>
        <Form onSubmit={handleOnSubmit}>
      <label htmlFor={nameInputId}>Name:</label>
      <input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <label htmlFor={numberInputId}>Number:</label>
      <input
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <Button type="submit" variant="addBtn">
        Add contact
      </Button>
    </Form>
    </Modal>
    
  );
};
