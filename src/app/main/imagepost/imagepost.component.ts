import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagepost',
  templateUrl: './imagepost.component.html',
  styleUrls: ['./imagepost.component.css']
})
export class ImagepostComponent implements OnInit {
  @Input() content: string;
  @Input() image: string;

  constructor() {}

  ngOnInit() { }

}
