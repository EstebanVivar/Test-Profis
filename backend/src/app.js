import express from "express";
import cors from "cors";
import config from "./config";
import morgan from "morgan";

import driversRoutes from "./routes/drivers.routes";

import vehiclesRoutes from "./routes/vehicles.routes";

const app = express();
app.set('port', config.port )


app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(driversRoutes)

app.use(vehiclesRoutes)
export default app;