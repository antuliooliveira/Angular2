import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls:['./data-binding.component.css'],
  styles: [
    `.highlight {
      background-color: yellow;
      font-weight: bold;
    }
        `
  ]
})
export class DataBindingComponent implements OnInit {
url: string ='http://loiane.com';
getValor() {
  return 1;
}
cursoAngular: boolean = true;
urlImagem = 'https://picsum.photos/200';

valorAtual: string = '';
valorSalvo: string ='';
isMouseOver: boolean = false;
nomeDoCurso: string = 'Curso de Angular Antulio';
valorInicial = 15;
nome: string ='abc';
pessoa: any = {
  nome:  'Antulio de Oliveira',
  idade: 59
}
getCurtirCurso() {
  return true;
}
botaoClicado() {
  alert ('Eu fui Apertado :)');
}
onKeyUp(evento: KeyboardEvent) {
  console.log((<HTMLInputElement>evento.target).value);
  this.valorAtual = (<HTMLInputElement>evento.target).value;
}
salvarValor(valor) {
  this.valorSalvo = valor;
}
onMouseOverOut() {
this.isMouseOver = !this.isMouseOver;
}
onMudouValor(evento){
  console.log(evento.novoValor);
}
  constructor() { }

  ngOnInit() {
  }

}
