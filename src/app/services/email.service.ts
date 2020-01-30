import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api = 'http://localhost:5000/emails';
  cabecalho = new HttpHeaders(
    { 'Authorization': localStorage.getItem('mail-token') }
  );

  constructor(private httpClient: HttpClient) { }

  enviar({ destinatario, assunto, conteudo }) {
    const emailParaAPi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }
    return this.httpClient.post(this.api, emailParaAPi, { headers: this.cabecalho });
  }


  listar() {
    return this.httpClient.get(this.api, { headers: this.cabecalho })
      .pipe<Email[]>(
        map(
          (response: any[]) => {
          return response.map(
            emailApi => new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataDeEnvio: emailApi.created_at,
              id: emailApi.id
            })
          )
        }
        )
      )
  }

  deletar(id){
    return this.httpClient.delete(`${this.api}/${id}`, {headers: this.cabecalho})
  }
}
