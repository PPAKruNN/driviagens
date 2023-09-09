import { db } from "../database/database.connection.js";
import { DBError } from "../errors/DbError.js";

async function create(origin, destination, start_date) {
    
    await db.query(`INSERT INTO flights(origin, destination, start_date) VALUES ($1, $2, $3)`, [
        origin, destination, start_date

    ])
    .catch((error) => {
        throw DBError(error, "Flight") ;
    });

};

async function readAll(whereString = "") {


    const result = await db.query(`
        SELECT flights.id, start_date, dest.name as destination, orig.name as origin
        FROM flights
        INNER JOIN cities dest
        ON destination = dest.id
        INNER JOIN cities orig ON origin = orig.id
        ${whereString}
        ORDER BY start_date
    `);

    return result.rows;

}


export const flightsRepository = {
    create,
    readAll
}