import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
url:string ='http://loiane.com';
getValor() {
  return 1;
}
cursoAngular: boolean = true;
urlImagem = 'https://picsum.photos/200';
getCurtirCurso() {
  return true;
}
  constructor() { }

  ngOnInit() {
  }

}
