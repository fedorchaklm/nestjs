import { Request } from 'express';
import { IJwtPayload } from './jwt-payload.interface';

export class IUserRequest extends Request {
  user: IJwtPayload;
}
