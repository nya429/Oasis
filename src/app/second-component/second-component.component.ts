import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  @Input() content: string;
  private expanded: boolean;

  constructor() { }

  ngOnInit() {
    this.expanded = false;
  }

  onToggle() {
    this.expanded = !this.expanded;
  }

}
