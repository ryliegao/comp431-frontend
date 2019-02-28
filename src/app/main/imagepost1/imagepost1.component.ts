import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagepost1',
  templateUrl: './imagepost1.component.html',
  styleUrls: ['./imagepost1.component.css']
})
export class Imagepost1Component implements OnInit {
  @Input() content: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() { }

}
