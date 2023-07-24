import { useState } from "react";
import { deleteContact } from "../../redux/contacts/contacts.operations";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { IContact } from "../../types/contatctsTypes";
import { Button } from "../Button/Button";
import { Item } from "./ContactListItem.styled";
import { Modal } from "../Modal/Modal";
import { DeleteContact } from "../ConfirmDeleteContact/DeleteContact";

interface IProps {
  contact: IContact;
}
export const ContactListItem: React.FC<IProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  const hadleClose =()=> {
    setOpenModal(false)
  }
  const onClickDelete = (id: string) => {
    dispatch(deleteContact(id));
  };
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

      {openModal && (<Modal toggleModal={hadleClose}><DeleteContact name={name} id={id} toggleModal={hadleClose}/></Modal>)}
    </>
  );
};
