
import { selectIsloading } from "../../redux/contacts/contacts.selectors";
import { useAppSelector } from "../../redux/hooks/hooks";
import { IContact } from "../../types/contatctsTypes"
import { ContactListItem } from "../ContactListItem/ContactListItem";


interface IProps {
    contacts: IContact[];    
}

export const ContactList: React.FC<IProps> =({contacts})=>{
  const isLoading = useAppSelector(selectIsloading)
   
  return (
    <ul>
   {isLoading ?<p>Loading...</p> : (contacts && contacts.map((contact) => (
      <ContactListItem
        key={contact.id}        
        contact ={contact}       
      />
    )))}
  </ul>
)
}