import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['../app.component.css']
})
export class Display3Component implements OnInit {

  value: string = ''
  constructor(private ds: DataSharingService) {
    this.ds.subjectValue.subscribe((value) => this.value = value)
  }

  ngOnInit(): void {
  }
  displayFun() {

  }

}
