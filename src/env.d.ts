declare interface Env {
  readonly NODE_ENV: string;
  NG_APP_KEYCLOAK_ISSUER_URI: string;
  NG_APP_KEYCLOAK_CLIENT_ID: string;
  NG_APP_KEYCLOAK_SCOPE: string;
  NG_APP_KEYCLOAK_BASE_URL: string;
}

declare interface ImportMeta {
  readonly env: Env;
}
declare const _NGX_ENV_: Env;

// 3. Use process.env.YOUR_ENV_VAR in your code. (deprecated)
declare namespace NodeJS {
  export interface ProcessEnv extends Env {}
}
