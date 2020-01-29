import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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


}
