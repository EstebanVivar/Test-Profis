import React, { Fragment, useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const EditVehicle = () => {
    const [Vehicle, setVehicle] = useState({
        capacidad: "",
        consumo: "",
        depreciacion: "",
        fecha_disponible: "",
        distancia_servicio: ""
    })

    const { IdVehicle } = useParams();
    useEffect(() => {
        const getVehicle = async () => {
            await axios.get(`http://localhost:5000/vehicle/${IdVehicle}`)
                .then(f => {
                    const { capacidad, consumo, depreciacion, fecha_disponible, distancia_servicio } = f.data[0];
                    setVehicle({ ...Vehicle,  capacidad, consumo, depreciacion, fecha_disponible, distancia_servicio })
                })
        }

        getVehicle();
    }, [IdVehicle])

    const OnInputChange = e => {
        const atributo = e.target.getAttribute('name');
        setVehicle({ ...Vehicle, [atributo]: e.target.value });
    }
    const editVehicle = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/editVehicle/${IdVehicle}`, Vehicle)
    }
    return (
        <Fragment>
            <Alert variant="success">
                <h1>
                    Editar Vehiculo
                </h1>
                <hr />

            </Alert>
            <Form onSubmit={editVehicle} >
                <Form.Group className="mb-3">
                    <Form.Label>Capacidad</Form.Label>
                    <Form.Control name='capacidad' value={Vehicle.capacidad} onChange={OnInputChange} type="number" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Consumo</Form.Label>
                    <Form.Control name='consumo' value={Vehicle.consumo} onChange={OnInputChange} type="number" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Depreciacion</Form.Label>
                    <Form.Control name='depreciacion' value={Vehicle.depreciacion} onChange={OnInputChange} type="number" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Distancia para llegar al servicio</Form.Label>
                    <Form.Control name='distancia_servicio' value={Vehicle.distancia_servicio} onChange={OnInputChange} type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha Disponible</Form.Label>
                    <Form.Control name='fecha_disponible' value={Vehicle.fecha_disponible} onChange={OnInputChange} type="text" placeholder="Ejemplo: 05/15/2022" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Link to="/vehicles" className='btn btn-primary m-1' >
                        Volver
                    </Link>
                    <Button variant="primary" type="submit">
                        Editar
                    </Button>
                </Form.Group>
            </Form>
        </Fragment>
    );
}

export default EditVehicle;