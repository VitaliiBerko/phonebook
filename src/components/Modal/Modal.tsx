import { ReactNode, useEffect, MouseEvent } from "react";
import { createPortal } from "react-dom";
import { CloseBtn, Inner, Overlay } from "./Modal.styled";
import icon from '../../images/Icons/icons.sprite.svg'

interface IProps {
    toggleModal: ()=> void;
    children: ReactNode
}

const modalRoot = document.getElementById("modal-root") as HTMLElement
console.log(modalRoot);

export const Modal: React.FC<IProps>=({toggleModal, children})=> {

    useEffect(()=>{
        const closeModal= (evt: Event):void=>{
            if(evt instanceof KeyboardEvent && evt.code ==='Escape') {
                toggleModal()
            }
        };
        window.addEventListener('keydown', closeModal);
        document.body.style.overflow = 'hidden';
        return ()=> {
            window.removeEventListener('keydown', closeModal)
        }
    }, [toggleModal])

    const closeOnClick =(evt: MouseEvent<HTMLElement>)=>{
        if (evt.target ===evt.currentTarget) {
            toggleModal()
        }
    }

    return createPortal(
        <Overlay onClick={closeOnClick}>
            <Inner>                
                <CloseBtn onClick={toggleModal}>
                <use xlinkHref={`${icon}#close`}/>
                </CloseBtn>
                {children}
            </Inner>
        </Overlay>,

        modalRoot
    )

}