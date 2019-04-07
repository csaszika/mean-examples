import { NestMiddleware } from '@nestjs/common';
import * as cors from 'cors';

export class CorsMiddleware implements NestMiddleware {
  /* istanbul ignore next */
  use(req: Request, res: Response, next: () => void): any {
    return cors()(req, res, next);
  }
}
