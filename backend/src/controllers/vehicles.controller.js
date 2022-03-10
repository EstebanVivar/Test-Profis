
import { getConnection, sql } from "../database/connection";

export const getVehicles = async (req, res) => {
    const pool = await getConnection();
    const vehicles = await pool.request().query("SELECT * from Vehiculo");
    res.json(vehicles.recordset)
}

export const newVehicle = async (req, res) => {
    console.log("OK")
    const { capacidad, consumo, distancia_servicio, fecha_disponible, depreciacion } = req.body;
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("capacidad", sql.SmallInt, capacidad)
            .input("consumo", sql.TinyInt, consumo)
            .input("distancia_servicio", sql.Int, distancia_servicio)
            .input("fecha_disponible", sql.Date, fecha_disponible)
            .input("depreciacion", sql.Int, depreciacion)
            .query("INSERT INTO [mi_camioncito].[dbo].[Vehiculo] (capacidad, consumo, distancia_servicio, fecha_disponible,depreciacion) VALUES (@capacidad, @consumo, @distancia_servicio, @fecha_disponible, @depreciacion);",);

        res.json({ capacidad, consumo, distancia_servicio, fecha_disponible, depreciacion });
    } catch (error) {
        console.log(error)
        res.status(500);
        res.send(error.message);
    }
}