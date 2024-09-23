import { JwtPayload } from 'jwt-decode';

export interface CustomJwtPayload extends JwtPayload {
  acr?: string;
  allowed_origins?: string[]; 
  azp?: string;
  email?: string;
  email_verified?: boolean;
  family_name?: string;
  given_name?: string;
  name?: string;
  preferred_username?: string;
  realm_access?: {
    roles: string[];
  };
  resource_access?: {
    account?: {
      roles: string[];
    };
  };
  scope?: string;
  session_state?: string;
  sid?: string;
  typ?: string;
}
