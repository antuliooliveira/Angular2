import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent],
  exports: [CursosComponent
    ],
    providers:[CursosService]
})
export class CursosModule { }
