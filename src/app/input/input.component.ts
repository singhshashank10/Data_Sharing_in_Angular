import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['../app.component.css']
})
export class InputComponent implements OnInit {
  constructor() { }
  @Output() Value = new EventEmitter<string>()
  ngOnInit(): void {
  }

  inputFun(input: string) {
    this.Value.emit(input);
  }

}
