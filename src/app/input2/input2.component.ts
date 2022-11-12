import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['../app.component.css']
})
export class Input2Component implements OnInit {
  constructor(
    public ds: DataSharingService
  ) { }
  ;
  ngOnInit(): void {
  }

  inputFun(input: string) {
    this.ds.setValue(input);
  }

}



