import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['../app.component.css']
})
export class Display2Component implements OnInit {
  value: string = ""
  constructor(
    private ds: DataSharingService,

  ) {

  }

  ngOnInit() { }
  displayFun() {

    this.ds.getValue().subscribe((value) => { this.value = value });
  }

}
