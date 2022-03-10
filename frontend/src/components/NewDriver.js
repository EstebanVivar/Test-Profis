import React, { Fragment, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


const NewDriver = () => {
    const [Driver, setDriver] = useState({
        nombre: '', apellido: '', telefono: '', email: '', fecha: ''
    })

    const OnInputChange = e => {
        const changedReason = e.target.getAttribute('name');
        setDriver({...Driver, [changedReason]:e.target.value});

        console.log(Driver)
    }
    const addDriver = async (e)=>
    {
        e.preventDefault();
        await axios.post("http://localhost:5000/newDriver/",Driver);
    }

    return (
        <Fragment>
            <Alert variant="success">
                <h1>
                    Agregar Piloto
                </h1>
                <hr />

            </Alert>
            <Form onSubmit={addDriver} >
                <Form.Group className="mb-3">

                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name='nombre' onChange={OnInputChange} type="text" placeholder="Nombre" />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control name='apellido' onChange={OnInputChange} type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control name='telefono' onChange={OnInputChange} type="number" placeholder="Numero de telefono" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control name='email' onChange={OnInputChange} type="email" placeholder="Correo electronico" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control name='fecha' onChange={OnInputChange} type="text" placeholder="Ejemplo: 05/15/2022" />
                </Form.Group>               
                <Form.Group className="mb-3">
                <Link to="/" className='btn btn-primary mr-1' >
                        Volver
                    </Link>
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form.Group>
            </Form>


        </Fragment>
    );
}

export default NewDriver;