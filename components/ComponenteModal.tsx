"use client";
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ComponenteModal() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="p-3 border rounded bg-light shadow-sm">
      <Button color="danger" onClick={toggle}>Abrir Modal</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal de ReactStrap</ModalHeader>
        <ModalBody>Este es el modal de la Práctica #3.</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}