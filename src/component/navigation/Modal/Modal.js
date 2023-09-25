import React, { useState } from "react";
import "./Modal.css";
import { ModalPopur } from "./ModalPopur/ModalPopur";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="modal-container">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
          document.body.style = 'overflow: hidden';
          document.querySelector('.calendarPicker').style = "display: none"
        }}
      >
        Предложить идею
      </button>
      {modalOpen && <ModalPopur setOpenModal={setModalOpen} />}
    </div>
  );
}

export { Modal };
