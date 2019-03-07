import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textpost',
  templateUrl: './textpost.component.html',
  styleUrls: ['./textpost.component.css']
})
export class TextpostComponent implements OnInit {
  @Input() content: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() { }

}
