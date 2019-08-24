import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private selectedItem: any;
  
  public items: Array<{ titulo: string; subtitulo: string }> = [];
 
  constructor() {
  }


  enviarAlerta(titulo : string, subtitulo:string){
      this.items.push({
        titulo: titulo,
        subtitulo: subtitulo
      });

    console.log(this.items)
  }

  ngOnInit() {
  }

}
