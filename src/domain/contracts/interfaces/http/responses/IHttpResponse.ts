export interface IHttpResponse {
  statusCode: number;
  body: unknown | { message: string } | Array<unknown>;
}
