import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Router } from "@angular/router";

const environment = {
  baseApiUrl: "https://api.someurl.com" // TODO: Load from confif
};

@Injectable()
export class BaseHttpService {
  constructor(private http: HttpClient, private router: Router) {}

  public apiList<T>(relativePath: string): Promise<T[]> {
    return this.list(relativePath);
  }

  public apiGet<T>(relativePath: string, query?: Object): Promise<T> {
    return this.get(relativePath, query);
  }

  public apiPost<T>(relativePath: string, body: Object): Promise<T> {
    return this.post(relativePath, body);
  }

  public apiPut<T>(
    relativePath: string,
    body: Object,
    successCallback?: Function
  ): Promise<T> {
    return this.put(relativePath, body, successCallback);
  }

  public apiDelete(relativePath: string, query?: Object): Promise<Boolean> {
    return this.delete(relativePath, query);
  }

  private list<T>(relativePath: string): Promise<T[]> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .get<T[]>(environment.baseApiUrl + relativePath, { headers })
      .toPromise()
      .then((response) => {
        return response as T[];
      })
      .catch((err) => this.handleErrors(err));
  }

  private get<T>(relativePath: string, query?: Object): Promise<T> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    let params = new HttpParams();
    if (query) {
      for (var key in query) {
        if (query.hasOwnProperty(key)) {
          params = params.set(key, query[key]);
        }
      }
    }

    return this.http
      .get<T>(environment.baseApiUrl + relativePath, { params, headers })
      .toPromise()
      .then((response) => {
        return response as T;
      })
      .catch((err) => this.handleErrors(err));
  }

  private post<T>(relativePath: string, body: Object): Promise<T> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .post<T>(environment.baseApiUrl + relativePath, body, { headers })
      .toPromise()
      .then((response) => {
        return response as T;
      })
      .catch((err) => this.handleErrors(err));
  }

  private put<T>(
    relativePath: string,
    body: Object,
    successCallback?: Function
  ): Promise<T> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .put<T>(environment.baseApiUrl + relativePath, body, { headers })
      .toPromise()
      .then((response) => {
        if (successCallback) {
          successCallback(response);
        }
        return response as T;
      })
      .catch((err) => this.handleErrors(err));
  }

  private delete(relativePath: string, query?: Object): Promise<Boolean> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    let params = new HttpParams();
    if (query) {
      for (var key in query) {
        if (query.hasOwnProperty(key)) {
          params = params.set(key, query[key]);
        }
      }
    }

    return this.http
      .delete(environment.baseApiUrl + relativePath, { params, headers })
      .toPromise()
      .then((response) => {
        return true;
      })
      .catch((err) => this.handleErrors(err));
  }

  private handleErrors<T>(err: HttpErrorResponse): Promise<T> {
    // TODO: Do something with the error before letting it bubble up.
    //       Example: Alerts, post to a log endpoint, whatever
    return Promise.reject(err.message || err);
  }
}
