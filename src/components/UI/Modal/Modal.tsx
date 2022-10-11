import React from "react";
import './Modal.scss'
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props: any) => (
    <>
        <div className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
    </>
)

export default Modal