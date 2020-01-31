import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header-search.css']
})
export class HeaderComponent implements OnInit {

  isMenuOpen: boolean = false;
  tituloDaPagina = 'Cmail';

  constructor(private pageService : PageService,
    private headerService : HeaderService) { 
    this.pageService
    .titulo
    .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
  }

  ngOnInit() {
  }

  toggleMenu()
  {
      this.isMenuOpen = !this.isMenuOpen;
  }

  handleBuscaChanges( {target} ){
    console.log(target.value);
    this.headerService.atualizaTermoDeFiltro(target.value);
  }

}
