
import React, { Fragment } from 'react';
import { Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <Fragment>
             <Alert variant="success">
                <h1>
                    Mi Camioncito
                </h1>
                <hr />

            </Alert>
            <Link to="/newDriver" className='btn btn-primary m-5' >
                Agregar Piloto
            </Link>

            <Link to="/newVehicle" className='btn btn-success m-5' >
                Agregar Vehiculo
            </Link>
        </Fragment>
    );
}

export default Home;