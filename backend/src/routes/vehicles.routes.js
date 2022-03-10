import { Router } from "express";
import { getVehicles,newVehicle } from "../controllers/vehicles.controller";

const router = Router();

router.get('/vehicles',getVehicles)


router.post('/newVehicle',newVehicle)

export default router;