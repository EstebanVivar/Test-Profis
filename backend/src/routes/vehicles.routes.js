import { Router } from "express";
import { getVehicles, newVehicle, deleteVehicle, getVehicle,editVehicle } from "../controllers/vehicles.controller";

const router = Router();

router.get('/vehicles', getVehicles)

router.get('/vehicle/:id', getVehicle)

router.post('/newVehicle', newVehicle)

router.delete('/deleteVehicle/:id', deleteVehicle)

router.put('/editVehicle/:id', editVehicle)
export default router;

