import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor(private ds: DataSharingService) { }
  value: string = ""

  ngOnInit(): void {
  }
  displayFun() {
    this.value = this.ds.getValue()
  }
}
