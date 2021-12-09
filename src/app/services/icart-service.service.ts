import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IcartServiceService {

  constructor(private http: HttpClient) { }

  public getDocumentoCartilla(cartilla: any): Promise<any> {
    let head = new HttpHeaders({
      codisapre: 'B',
    });
    let body = cartilla;
    //let params = new HttpParams().set('codigoplan', codigoPlan);
    return this.http
      .post(`${environment.FRAMEWORK}/v1/cartillas/download`, body, {
        headers: head,
        responseType: "blob" as "json",
      })
      .toPromise();
  }
}
