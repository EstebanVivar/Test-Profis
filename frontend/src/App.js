
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

// import Drivers from './components/Drivers';
import NewDriver from './components/NewDriver';
import NewVehicle from './components/Vehicle/NewVehicle';
import Home from './components/Home';
import Vehicles from './components/Vehicle/Vehicles';
import EditVehicle from './components/Vehicle/EditVehicle';
// RONI LA CAGASTE

function App() {
  return (
    <Router>
      <Container className='p-5'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Vehicles" element={<Vehicles />} />
          <Route exact path="/NewVehicle" element={<NewVehicle />} />
          <Route exact path="/EditVehicle/:IdVehicle" element={<EditVehicle />} />
          <Route exact path="/NewDriver" element={<NewDriver />} />
        </Routes>
      </Container>
    </Router>


  );
}

export default App;
