import { useState } from "react";
import { IContact } from "../../types/contatctsTypes";
import { Button } from "../Button/Button";
import { Item } from "./ContactListItem.styled";
import { Modal } from "../Modal/Modal";
import { ConfirmDeleteContact } from "../ConfirmDeleteContact/ConfirmDeleteContact";

interface IProps {
  contact: IContact;
}
export const ContactListItem: React.FC<IProps> = ({ contact }) => {
  
  const [openModal, setOpenModal] = useState(false);

  const hadleClose =()=> {
    setOpenModal(false)
  }
  
  const { id, name, number } = contact;
  return (
    <>
      <Item>
        {name} : {number}
        <Button
          variant="delBtn"
          type="button"
          onClick={() => setOpenModal(true)}
        >
          Delete
        </Button>
      </Item>

      {openModal && (<Modal toggleModal={hadleClose}><ConfirmDeleteContact name={name} id={id} toggleModal={hadleClose}/></Modal>)}
    </>
  );
};
