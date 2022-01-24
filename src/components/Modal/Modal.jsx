import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./Modal.styled";
const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
    componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    };
    
    handleKeyDown = (ev) => {
    if (ev.code === "Escape") {
      this.props.toogleModal(ev);
    }
  };

  handleClickOverlay = (ev) => {
    if (ev.currentTarget === ev.target) {
      this.props.toogleModal(ev);
    }
    };
    
    render() {
        return createPortal(
            <Overlay>
                <ModalWindow>
                    {this.props.children}
                </ModalWindow>
            </Overlay>, modalRoot
        );
    };
};

export default Modal;