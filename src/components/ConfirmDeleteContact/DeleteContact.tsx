import { deleteContact } from "../../redux/contacts/contacts.operations";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { Button } from "../Button/Button";

interface IProps {
    name: string;
    id: string;
    toggleModal: ()=>void
}

export const DeleteContact: React.FC<IProps> = ({id, name, toggleModal}) => {
    const dispatch = useAppDispatch();

    const handleDelete =()=>{
        dispatch(deleteContact(id))
        toggleModal()
    }

  return (
    <>
      <h3>Do you really want to delete contact {name}?</h3>
      <ul>
        <li><Button type="button" variant="delBtn" onClick={handleDelete}>Yes</Button></li>
        <li><Button type="button" variant="logOutBtn" onClick={toggleModal}>Cancel</Button></li>
      </ul>
    </>
  );
};
