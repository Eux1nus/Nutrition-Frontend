import { SecurityToken } from './../models/security-token.model';

export class LocalStorageHelper {
  public static getToken(): SecurityToken {
    return new SecurityToken();
  }

  public static saveToken(token: SecurityToken): boolean {
    if (!token) return false;
    localStorage.setItem('Authorization', JSON.stringify(token));
    return true;
  }

  public static removeToken(): void {
    localStorage.removeItem('Authorization');
  }
}
