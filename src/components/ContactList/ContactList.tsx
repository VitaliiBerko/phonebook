import { IContact } from "../../types/contatctsTypes"
import { ContactListItem } from "../ContactListItem/ContactListItem";

interface IProps {
    contacts: IContact[];    
}

export const ContactList: React.FC<IProps> =({contacts})=>{

  return (
    <ul>
    {contacts.map((contact) => (
      <ContactListItem
        key={contact.id}        
        contact ={contact}       
      />
    ))}
  </ul>
)
}