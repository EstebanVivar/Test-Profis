
import { getConnection, sql } from "../database/connection";

export const getVehicles = async (req, res) => {
    const pool = await getConnection();
    const vehicles = await pool.request().query("SELECT * from Vehiculo");
    res.json(vehicles.recordset)
}

export const getVehicle = async (req, res) => {
    console.log(req.params.id)
    const pool = await getConnection();
    const vehicles = await pool.request()
    .input("id_vehiculo", sql.Int, req.params.id)
    .query("SELECT * from [mi_camioncito].[dbo].[Vehiculo] where id_vehiculo = @id_vehiculo");
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


export const deleteVehicle = async (req, res) => {

    try {
        const pool = await getConnection();
        console.log( req.params.id)
        await pool
            .request()
            .input("id_vehiculo", sql.Int, req.params.id)
            .query("DELETE FROM [mi_camioncito].[dbo].[Vehiculo] WHERE id_vehiculo = @id_vehiculo;");

    } catch (error) {
        console.log(error)
        res.status(500);
        res.send(error.message);
    }
}

export const editVehicle = async (req, res) => {
    const { capacidad, consumo, depreciacion, fecha_disponible, distancia_servicio } = req.body;

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("id_vehiculo", sql.Int, req.params.id)
            .input("capacidad", sql.Int, capacidad)
            .input("consumo", sql.Int, consumo)
            .input("depreciacion", sql.Int, depreciacion)
            .input("fecha_disponible", sql.Date, fecha_disponible)
            .input("distancia_servicio", sql.Int, distancia_servicio)            
            .query("UPDATE [mi_camioncito].[dbo].[Vehiculo] SET capacidad=@capacidad, consumo=@consumo , depreciacion=@depreciacion ,fecha_disponible=@fecha_disponible , distancia_servicio=@distancia_servicio WHERE id_vehiculo = @id_vehiculo;");
    } catch (error) {
        console.log(error)
        res.status(500);
        res.send(error.message);
    }
}