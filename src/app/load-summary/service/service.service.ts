import { Injectable } from '@angular/core';
import data from '../../data/object.json'
import { ObjectData } from '../model/object-interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getData():ObjectData {
    return data.data[0]
  }


}
