import { CustomJwtPayload } from "src/app/token-payload.model";

export interface User extends CustomJwtPayload {
  username: string;
  accessToken: string;
  refreshToken: string;
}
