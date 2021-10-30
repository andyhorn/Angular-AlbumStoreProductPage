import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';
  constructor(private _http: Http) { }

  getAlbum(): Observable<Response> {
    return this._http.get(this._albumUrl)
    .pipe(
        map((response: Response) => response.json())
      );
  }
}
