import { Router } from "express";
import { getDrivers,newDriver } from "../controllers/drivers.controller";

const router = Router();

router.get('/drivers',getDrivers)


router.post('/newDriver',newDriver)

export default router;