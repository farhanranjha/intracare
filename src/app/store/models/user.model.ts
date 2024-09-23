import { CustomJwtPayload } from "src/app/types/auth/token-payload.model";

export interface User extends CustomJwtPayload {
  username: string;
  accessToken: string;
  refreshToken: string;
}
