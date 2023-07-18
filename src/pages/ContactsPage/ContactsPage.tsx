import React, { FC, useEffect, useState } from "react";
import { ContactForm } from "../../components/Forms/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { Filter } from "../../components/Filter/Filter";
import { MainTitle, Title, WrapperPage } from "../../styles/commom.styled";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  selectContacts,
  selectError,
} from "../../redux/contacts/contacts.selectors";
import { selectIsLoading } from "../../redux/auth/auth.selectors";
import { fetchContacts } from "../../redux/contacts/contacts.operations";
import Loader from "../../components/Loader/Loader";

const ContactsPage: FC = () => {
  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value.trim().toLowerCase());
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <WrapperPage>
      <MainTitle className="title">Phonebook</MainTitle>
      {isLoading && !error && <Loader />}
      <ContactForm contacts={contacts} />
      <Title className="title">Contacts</Title>
      <Filter value={filter} onChangeFilter={handleFilterChange} />
      {!!contacts && <ContactList contacts={filteredContacts} />}
    </WrapperPage>
  );
};

export default ContactsPage;
