import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {

  Ok(res: Response, data?: any): Response{
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMessage: 'Success',
      data
    })
  }

  Created(res: Response, data?: any): Response{
    return res.status(HttpStatus.CREATED).json({
      status: HttpStatus.CREATED,
      statusMessage: 'Successfully created',
      data
    })
  }

  NotFound(res: Response, data?: any): Response{
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMessage: 'NotFound',
      error: data
    })
  }

  Unauthorized(res: Response, data?: any): Response{
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMessage: 'Unauthorized',
      error: data
    })
  }

  Forbiden(res: Response, data?: any): Response{
    return res.status(HttpStatus.FORBIDEN).json({
      status: HttpStatus.FORBIDEN,
      statusMessage: 'Forbiden',
      error: data
    })
  }
  
  Error(res: Response, data?: any): Response{
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMessage: 'Internar server error',
      error: data
    })
  }

}