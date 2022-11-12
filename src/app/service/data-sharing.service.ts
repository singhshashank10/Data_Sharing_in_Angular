import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

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

  public getValue(): Observable<string> {
    return of(this.value);
  }

  setBehaviorSuubject(value: string) {
    this.subjectValue.next(value);
  }
}
