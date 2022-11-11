import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  value: string = ''
  constructor() { }

  setValue(value: string) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

}
