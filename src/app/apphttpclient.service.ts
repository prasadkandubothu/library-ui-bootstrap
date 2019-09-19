import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApphttpclientService {

  constructor(private _http : HttpClient) { }

  domainURL = environment.baseURI;

  get(endpoint){
   return this._http.get(this.domainURL+endpoint);
  }

  post(endpoint, bodyParams){console.log(bodyParams);
    return this._http.post(this.domainURL+endpoint, bodyParams);
  }

  put(endpoint, bodyParams){
    this._http.put(this.domainURL+endpoint, bodyParams);
  }

  delete(endpoint){
    this._http.delete(this.domainURL+endpoint);
  }
}
