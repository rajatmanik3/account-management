import { Injectable } from "@angular/core";
import {
  BaseRequestOptions,
  URLSearchParams
} from "@angular/http";
import { Observable } from "rxjs/Rx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment as env } from "../../../environments/environment";
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { 
  }

  get(url): Observable<any> {
    return this.http.get(env.base_url + url);
  }

  put(url, body = {}): Observable<any> {
    return this.http.put(env.base_url + url, body);
  }


  post(url, body = {}): Observable<any> {
    return this.http.post(env.base_url + url, body);
  }

  delete(url): Observable<any> {
    return this.http.delete(env.base_url + url);
  }

  private createRequestOption(searchOptions?: any): BaseRequestOptions {
    const options: BaseRequestOptions = new BaseRequestOptions();
    if (searchOptions) {
      const params: URLSearchParams = new URLSearchParams();
      params.set("page", searchOptions.page);
      params.set("size", searchOptions.size);
      if (searchOptions.sort) {
        params.set("sort", searchOptions.sortNew);
      }

      params.set("query", searchOptions.query);

      options.search = params;
    }
    return options;
  }
}
