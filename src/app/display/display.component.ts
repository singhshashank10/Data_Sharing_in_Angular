import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['../app.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() value: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
