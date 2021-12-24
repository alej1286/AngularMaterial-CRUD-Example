import { Pipe, PipeTransform } from '@angular/core';
import { Tipo } from './tipo';

@Pipe({
    name: 'tipoById'
  })
  export class tipoByIdPipe implements PipeTransform {
    transform(tipoId: number, tipos: Tipo[]): string {
      const tipo = tipos.find(tipo => tipo.id === tipoId);
      return tipo ? tipo.descr : "";
    };
  }