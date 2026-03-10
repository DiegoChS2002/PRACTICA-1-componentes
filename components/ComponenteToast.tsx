"use client";
import React, { useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function ComponenteToast() {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <div className="p-3 border rounded bg-light shadow-sm">
      <Button color="primary" onClick={toggle}>Mostrar Toast</Button>
      <div className="mt-3" style={{ width: '250px' }}>
        <Toast isOpen={show}>
          <ToastHeader toggle={toggle} className="bg-primary text-white">Notificación</ToastHeader>
          <ToastBody>¡Toast funcionando con éxito!</ToastBody>
        </Toast>
      </div>
    </div>
  );
}