import httpStatus from "http-status";
import { flightsService } from "../services/flights.service.js";

async function create(req, res) {
    
    const { origin, destination, date } = req.body;
    
    await flightsService.create(origin, destination, date);

    res.sendStatus(httpStatus.CREATED);

}


export const flightsController = {
    create
};