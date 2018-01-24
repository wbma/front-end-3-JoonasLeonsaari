import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class DigitransitService {

  apiURL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient) {
  }
  getRoutes(input) {
    const body = `{
  stops(name: "${input}") {
    name
    patterns {
      name
      route {
        shortName
        longName
      }
      directionId
    }
  }
}`;
    const config = {
      headers: new HttpHeaders().set('Content-Type', 'application/graphql')
    };
    return this.http.post(this.apiURL, body, config);

  }
}
