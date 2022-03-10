import sql from "mssql";

const dbSettings = {
    user: 'EstebanVivar',
    password: 'CEVivar.98',
    server: 'localhost',
    database: 'mi_camioncito',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error)
    }
}

export {sql};
