import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  private caminho : string;
  private texto : object;
  constructor() { 

    this.caminho = "/assets/images/software.jpeg";

    this.texto = {titulo:"Aprendendo Ionic", subtitulo:"Bem vindo", texto:"testeeeee" };
 
  }
   
  ngOnInit() {
  }

}
