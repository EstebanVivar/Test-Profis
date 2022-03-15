import React, { Fragment, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


const NewVehicle = () => {
    const [Vehicle, setVehicle] = useState({
        capacidad: '', consumo: '', distancia_servicio: '', fecha_disponible: '', depreciacion: ''
    })

    const OnInputChange = e => {
        const attribute = e.target.getAttribute('name');
        setVehicle({ ...Vehicle, [attribute]: e.target.value });
    }
    const addVehicle = async (e) => {
        console.log(Vehicle)
        e.preventDefault();
        await axios.post("http://localhost:5000/newVehicle/", Vehicle);
    }

    return (
        <Fragment>
            <Alert variant="success">
                <h1>
                    Agregar Vehiculo
                </h1>
                <hr />

            </Alert>
            <Form onSubmit={addVehicle} >
                <Form.Group className="mb-3">

                    <Form.Label>Capacidad</Form.Label>
                    <Form.Control name='capacidad' onChange={OnInputChange} type="number" />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Consumo</Form.Label>
                    <Form.Control name='consumo' onChange={OnInputChange} type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Distancia para llegar al servicio</Form.Label>
                    <Form.Control name='distancia_servicio' onChange={OnInputChange} type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Depreciacion</Form.Label>
                    <Form.Control name='depreciacion' onChange={OnInputChange} type="number" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control name='fecha_disponible' onChange={OnInputChange} type="text" placeholder="Ejemplo: 05/15/2022" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Link to="/Vehicles" className='btn btn-primary m-1' >
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

export default NewVehicle;