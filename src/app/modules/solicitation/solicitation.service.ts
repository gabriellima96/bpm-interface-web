import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {
  private urlColaboradores = 'https://ec2-3-236-167-25.compute-1.amazonaws.com:8181/SXI/G5Rest?server=http://localhost:8080/&module=rubi&service=com.senior.bpm.treinamento&port=buscarColaboradores&DATASOURCETTRNAME=colaboradores';

  constructor(private http: HttpClient) { }

  public buscarColaboradores() {
    return this.http.get(this.urlColaboradores);
  }
}
