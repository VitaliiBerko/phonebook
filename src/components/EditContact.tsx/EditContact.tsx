import { IContact } from "../../types/contatctsTypes";

interface IProps {
    toggleModal: ()=>void;
    contact: IContact
}

export const EditContact =({toggleModal, contact}: IProps)=>{
    return(
        toggleModal(), contact
        

    )
}