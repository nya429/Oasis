import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  @Output() contentChanged = new EventEmitter<string> ();

  constructor() { }

  ngOnInit() {
  }

  onInput(content: string) {
    this.contentChanged.emit(content);
  }
}
