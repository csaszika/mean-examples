import { CorsMiddleware } from './cors.middleware';

describe('CorsMiddleware', () => {

  let middleware: CorsMiddleware;

  beforeEach(() => {
    middleware = new CorsMiddleware();
  });

  it('should be defined', () => {
    expect(middleware).toBeTruthy();
  });
});
