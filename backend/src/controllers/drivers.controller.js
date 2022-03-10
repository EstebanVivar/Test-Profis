
import { getConnection, sql } from "../database/connection";

export const getDrivers = async (req, res) => {
    const pool = await getConnection();
    const drivers = await pool.request().query("SELECT * from Piloto");
    res.json(drivers.recordset)
}

export const newDriver = async (req, res) => {
    const { nombre, apellido, telefono, email, fecha } = req.body;
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("nombre", sql.Text, nombre)
            .input("apellido", sql.Text, apellido)
            .input("telefono", sql.Int, telefono)
            .input("email", sql.Text, email)
            .input("fecha", sql.Date, fecha)
            .query("INSERT INTO [mi_camioncito].[dbo].[Piloto] (nombre, apellido, telefono, correo,fecha_disponible) VALUES (@nombre,@apellido,@telefono,@email,@fecha);",);

        res.json({ nombre, apellido, telefono, email, fecha });
    } catch (error) {
        console.log(error)
        res.status(500);
        res.send(error.message);
    }
}