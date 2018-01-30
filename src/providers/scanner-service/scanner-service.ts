import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import uuid from "uuid";

@Injectable()
export class ScannerServiceProvider {
  constructor(public http: HttpClient) {}

  postData(idAluno, idDisciplina) {
     const uri = "https://curso-ferias.herokuapp.com"
     const body = {
         id: uuid.v4(),
         dia: new Date(),
         idDisciplina: idDisciplina,
         usuario: idAluno
     };
      return this.http.post(`${uri}/presenca`,body);
  }
}