import React, { useState } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import { IContact } from "../../../types/contatctsTypes";
import { Form } from "../Form.styled";
import { Button } from "../../Button/Button";
import { addContact } from "../../../redux/contacts/contacts.operations";
import { useAppDispatch} from "../../../redux/hooks/hooks";


interface IProps {  
  contacts: IContact[];
}

Notiflix.Notify.init({
  position: "center-top",
});

export const ContactForm: React.FC<IProps> = ({contacts}) => {
    const dispatch = useAppDispatch();

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

  const resetForm = (): void => {
    setName("");
    setNumber("");
  };

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
   
    const form = evt.target as HTMLFormElement;
    const {name, number}= form.elements as typeof form.elements & {
      name: HTMLInputElement;
      number: HTMLInputElement
    }; 

    const contactName = name.value;
    const contactNumber = number.value;

    if (contacts.find((contact) => contact.name === contactName)) {
      Notiflix.Notify.info(`${name.value} is already in contacts`);
      setName("");
      return;
    } else { resetForm();
    dispatch(addContact({name: contactName, number: contactNumber}))
    }

    
   
  };

  return (
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

      <Button type="submit" variant="addBtn" >
        Add contact
      </Button>
    </Form>
  );
};
