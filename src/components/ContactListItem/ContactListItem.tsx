import { delateContact } from "../../redux/contacts/contacts.operations";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { IContact } from "../../types/contatctsTypes";
import { Button } from "../Button/Button";
import { Item } from "./ContactListItem.styled";

interface IProps {
  contact: IContact;  
}
export const ContactListItem: React.FC<IProps> = ({ contact }) => {
  const dispatch = useAppDispatch();

  const onClickDelete = (id: string) => {
    dispatch(delateContact(id))
  }
  const { id, name, number } = contact;
  return (
    <Item>
      {name} : {number}
      <Button variant="delBtn" type="button" onClick={() => onClickDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};
