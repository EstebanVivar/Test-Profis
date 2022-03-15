import { Alert, Table, Button } from 'react-bootstrap';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Vehicles = () => {
    const [Vehicles, setVehicles] = useState([])

    useEffect(() => {
        const getVehicles = async () => {
            await axios.get("http://localhost:5000/vehicles/")
                .then(f => {
                    setVehicles(f.data)
                })
        }

        getVehicles();
    }, [])

    const deleteVehicles = async (e, id) => {
        e.preventDefault();
        await axios.delete("http://localhost:5000/deleteVehicle/" + id)
    }
    
    return (

        <Fragment>
            <Alert variant="success">
                <h1>
                    Vehiculos
                </h1>
                <hr />
                <Link to="/newVehicle" className='btn btn-success p-2 m-1'>
                    Agregar Vehiculo
                </Link>
                <Link to="/" className='btn btn-primary p-2 mr-1' >
                    Volver
                </Link>
            </Alert>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID Vehiculo</th>
                        <th>Capacidad(m^3)</th>
                        <th>Consumo</th>
                        <th>Depreciacion</th>
                        <th>Distancia origen-servicio(Km)</th>

                        <th>Fecha Disponible</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {Vehicles.length > 0
                        ? Vehicles.map(element => {

                            return (
                                <tr key={element.id_vehiculo}>
                                    <td>{element.id_vehiculo}</td>
                                    <td>{element.capacidad}</td>
                                    <td>{element.consumo}</td>
                                    <td>{element.depreciacion}</td>
                                    <td>{element.distancia_servicio}</td>
                                    <td>{new Date(element.fecha_disponible).toLocaleDateString()}</td>
                                    <td>
                                        <Link to={`/editVehicle/${element.id_vehiculo}`} className='btn btn-primary p-1 m-1'>Actualizar</Link>
                                        <Button onClick={(e, id) => { deleteVehicles(e, element.id_vehiculo) }} className='btn-danger p-1 m-1'>Eliminar</Button>
                                    </td>
                                </tr>
                            )
                        })
                        : null}

                </tbody>
            </Table>
        </Fragment>
    );
}

export default Vehicles;