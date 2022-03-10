
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

// import Drivers from './components/Drivers';
import NewDriver from './components/NewDriver';
import NewVehicle from './components/NewVehicle';
import Home from './components/Home';


function App() {
  return (


     
         <Router>
          <Container className='p-5'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/NewDriver" element={<NewDriver />} />
            <Route exact path="/NewVehicle" element={<NewVehicle />} />
          </Routes>
          </Container>
    </Router>
      
     
  );
}

export default App;
