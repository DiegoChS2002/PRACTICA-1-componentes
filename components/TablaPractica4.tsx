"use client";
import React, { useState } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import datosRaw from '../datos.json';

interface Animal {
    id: number;
    nombre: string;
    habitat: string;
    imagen: string;
}

const misDatos = datosRaw as Animal[];

export default function TablaPractica4() { // <--- FALTABA ESTA LLAVE
    const [modal, setModal] = useState(false);
    const [imagenActual, setImagenActual] = useState('');
    const [nombreActual, setNombreActual] = useState('');

    const toggle = (img: string = '', nombre: string = '') => {
        setImagenActual(img);
        setNombreActual(nombre);
        setModal(!modal);
    };

    return (
        <div className="mt-4">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Hábitat</th>
                        <th>Icono</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {misDatos.map((animal: Animal) => (
                        <tr key={animal.id}>
                            <td>{animal.id}</td>
                            <td>{animal.nombre}</td>
                            <td>{animal.habitat}</td>
                            <td>
                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                            </td>
                            <td>
                                <Button color="secondary" onClick={() => toggle(animal.imagen, animal.nombre)}>
                                    Ver Imagen
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal isOpen={modal} toggle={() => setModal(false)} centered size="lg">
    <ModalHeader toggle={() => setModal(false)}>
        {nombreActual}
    </ModalHeader>
    
    <ModalBody style={{ 
        height: '60vh', // Altura fija: 60% de la pantalla
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        overflow: 'hidden' // Evita que la imagen se salga
    }}>
        <img 
            src={imagenActual.replace('400/300', '800/600')} 
            alt={nombreActual} 
            style={{ 
                maxHeight: '100%', 
                maxWidth: '100%', 
                objectFit: 'contain', // Ajusta la foto sin deformar ni cortar
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }} 
        />
    </ModalBody>

    <div className="p-3 text-center border-top">
        <Button color="danger" onClick={() => setModal(false)} className="px-5 shadow-sm">
            Cerrar y Volver
        </Button>
    </div>
</Modal>
        </div>
    );
}