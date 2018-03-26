"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(err, req, res, next) {
    console.error('APi error handler executado: ${err}');
    res.status(500).json({
        errorCode: 'Erro 001',
        message: 'Erro interno do server'
    });
}
exports.errorHandlerApi = errorHandlerApi;
//
