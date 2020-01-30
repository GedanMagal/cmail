import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [ './list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  @Input() dadosEmail = {};
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter();

  // @Input() destinatario = '';
  // @Input() assunto = '';
  // @Input() introducaoDoConteudo = '';
  // @Input() dataDeEnvio = '';

  ngOnInit() {
  }

  removeEmail(click: Event){
    if(confirm('tem certeza?')){
      this.vaiRemover.emit({status: 'removing'});
    }
  }

}
