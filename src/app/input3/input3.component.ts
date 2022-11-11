import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-input3',
  templateUrl: './input3.component.html',
  styleUrls: ['./input3.component.css']
})
export class Input3Component implements OnInit {

  constructor(private ds: DataSharingService) { }

  ngOnInit(): void {
  }
  inputFun(value: string) {
    this.ds.setBehaviorSuubject(value)
  }

}
