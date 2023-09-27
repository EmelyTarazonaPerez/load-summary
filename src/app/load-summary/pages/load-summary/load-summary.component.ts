import { Component } from '@angular/core';
import data from '../../../data/object.json'
import { ObjectData } from '../../model/object-interface';
import { ServiceService } from '../../service/service.service';
import {
  MARCA_MOTO,
  MODELO_MOTO,
  PRECIO_DE_MOTO,
  MONTO_INICIAL,
  TOTAL_A_FINANCIAR,
  FECHA_DE_PAGO,
  FRECUENCIA_DE_PAGO,
  FINANCIAMIENTO,
  INCLUYE
} from './constante/constantes';

@Component({
  selector: 'app-load-summary',
  templateUrl: './load-summary.component.html',
  styleUrls: ['./load-summary.component.scss']
})
export class LoadSummaryComponent {

  MARCA_MOTO = MARCA_MOTO
  MODELO_MOTO = MODELO_MOTO
  PRECIO_DE_MOTO = PRECIO_DE_MOTO
  MONTO_INICIAL = MONTO_INICIAL
  TOTAL_A_FINANCIAR = TOTAL_A_FINANCIAR
  FECHA_DE_PAGO = FECHA_DE_PAGO
  FRECUENCIA_DE_PAGO = FRECUENCIA_DE_PAGO
  FINANCIAMIENTO = FINANCIAMIENTO
  INCLUYE = INCLUYE
  COLOR = '#733FE7'

  dataObject!:ObjectData;
  constructor ( private serviceload:ServiceService ) {

  }

  ngOnInit(){
    console.log(data.data[0])
    this.dataObject = this.serviceload.getData();

  }

}
