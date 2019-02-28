import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-imagepost2',
  templateUrl: './imagepost2.component.html',
  styleUrls: ['./imagepost2.component.css']
})
export class Imagepost2Component implements OnInit {
  @Input() content: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() { }

}
