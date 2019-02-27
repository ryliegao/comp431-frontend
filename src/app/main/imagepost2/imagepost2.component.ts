import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-imagepost2',
  templateUrl: './imagepost2.component.html',
  styleUrls: ['./imagepost2.component.css']
})
export class Imagepost2Component implements OnInit {
  @Input() private content: string;
  @Input() private image: string;

  constructor() { }

  ngOnInit() { }

}
