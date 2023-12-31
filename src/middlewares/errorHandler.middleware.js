import httpStatus from "http-status";
import ErrorEnum from "../errors/ErrorEnum.js";

function ErrorHandler(error, req, res, next) {
    if(error.type === ErrorEnum.validation) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    if(error.type === ErrorEnum.duplicate) return res.status(httpStatus.CONFLICT).send(error.message);
    if(error.type === ErrorEnum.badRoute) return res.status(httpStatus.CONFLICT).send(error.message);
    if(error.type === ErrorEnum.unknownError) return res.status(httpStatus.NOT_FOUND).send(error.message);
    if(error.type === ErrorEnum.badDate) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    if(error.type === ErrorEnum.badDateFilter) return res.status(httpStatus.BAD_REQUEST).send(error.message);
    if(error.type === ErrorEnum.toomany) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    
    console.log("[Debug] Unknown error: ", error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}

export { ErrorHandler };