import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  constructor() { }
  value: string = '';
  subjectValue: BehaviorSubject<string> = new BehaviorSubject<string>('')


  setValue(value: string) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setBehaviorSuubject(value: string) {
    this.subjectValue.next(value);
  }
}
