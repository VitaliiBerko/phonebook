import { useState } from "react";
import { IContact } from "../../types/contatctsTypes";
import { Button } from "../Button/Button";
import { Item, ListButtonStyled } from "./ContactListItem.styled";
import { Modal } from "../Modal/Modal";
import { ConfirmDeleteContact } from "../ConfirmDeleteContact/ConfirmDeleteContact";
import { EditContact } from "../EditContact.tsx/EditContact";

interface IProps {
  contact: IContact;
}
export const ContactListItem: React.FC<IProps> = ({ contact }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const hadleClose = () => {
    setOpenModal(false);
  };
  const hadleEditClose = () => {
    setOpenEditModal(false);
  };

  const { id, name, number } = contact;
  return (
    <>
      <Item>
        {name} : {number}
        <ListButtonStyled>
          <li>
            <Button
              variant="delBtn"
              type="button"
              onClick={() => setOpenModal(true)}
            >
              Delete
            </Button>
          </li>
          <li>
            <Button
              variant="addBtn"
              type="button"
              onClick={() => setOpenEditModal(true)}
            >
              Edit
            </Button>
          </li>
        </ListButtonStyled>
      </Item>

      {openModal && (
        <Modal toggleModal={hadleClose}>
          <ConfirmDeleteContact name={name} id={id} toggleModal={hadleClose} />
        </Modal>
      )}
      {openEditModal && (
        <Modal toggleModal={hadleEditClose}>
          <EditContact contact={contact} toggleModal={hadleEditClose} />
        </Modal>
      )}
    </>
  );
};
