import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export function errorHandlerApi(err:  ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
  console.error('APi error handler executado: ${err}' );
  res.status(500).json({
    errorCode: 'Erro 001',
    message : 'Erro interno do server'
  });
}
//
