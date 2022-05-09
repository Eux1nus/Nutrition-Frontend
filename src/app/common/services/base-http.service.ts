import { LocalStorageHelper } from './../helpers/local-storage.helper';
import { RequestHelper } from './../helpers/request.helper';
import { Http, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export class BaseHttpService {
  protected apiUrl: string = environment.apiEndPoint;

  constructor(private http: Http) {}

  protected get(
    url: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    if (!options) options = RequestHelper.constructRequestOptions();

    if (!options.headers) options.headers = new Headers();

    const securityToken = LocalStorageHelper.getToken();
    if (securityToken) {
      securityToken.token?.slice(0, 6) !== 'Bearer'
        ? options.headers.set('Authorization', `Bearer ${securityToken.token}`)
        : options.headers.set('Authorization', `${securityToken.token}`);
    }

    return this.http.get(url, options);
  }

  protected post(
    url: string,
    body: any,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    if (!options) options = RequestHelper.constructRequestOptions();

    if (!options.headers) options.headers = new Headers();

    const securityToken = LocalStorageHelper.getToken();
    if (securityToken) {
      securityToken.token?.slice(0, 6) !== 'Bearer'
        ? options.headers.set('Authorization', `Bearer ${securityToken.token}`)
        : options.headers.set('Authorization', `${securityToken.token}`);
    }

    return this.http.post(url, body, options);
  }

  protected put(
    url: string,
    body: any,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    if (!options) options = RequestHelper.constructRequestOptions();

    if (!options.headers) options.headers = new Headers();

    const securityToken = LocalStorageHelper.getToken();
    if (securityToken) {
      securityToken.token?.slice(0, 6) !== 'Bearer'
        ? options.headers.set('Authorization', `Bearer ${securityToken.token}`)
        : options.headers.set('Authorization', `${securityToken.token}`);
    }

    return this.http.post(url, body, options);
  }

  protected delete(
    url: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    if (!options) options = RequestHelper.constructRequestOptions();

    if (!options.headers) options.headers = new Headers();

    const securityToken = LocalStorageHelper.getToken();
    if (securityToken) {
      securityToken.token?.slice(0, 6) !== 'Bearer'
        ? options.headers.set('Authorization', `Bearer ${securityToken.token}`)
        : options.headers.set('Authorization', `${securityToken.token}`);
    }

    return this.http.delete(url, options);
  }
}
