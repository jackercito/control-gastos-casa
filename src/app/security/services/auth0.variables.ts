import { environment } from '../../../environments/environment';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  RESPONSE_TYPE: string;
  RETURN_URL: string;
  NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: environment.AUTH0_CLIENTE_ID,
  CLIENT_DOMAIN: environment.AUTH0_DOMAIND,
  RESPONSE_TYPE: environment.AUTH0_RESPONSE_TYPE,
  AUDIENCE: environment.AUTH0_API_URL,
  REDIRECT: environment.AUTH0_CALLBACK_URL,
  RETURN_URL: environment.AUTH0_RETURN_URL,
  NAMESPACE: environment.AUTH0_NAMESPACE
};

