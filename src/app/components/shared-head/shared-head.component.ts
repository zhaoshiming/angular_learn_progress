import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-head',
  templateUrl: './shared-head.component.html',
  styleUrls: ['./shared-head.component.css']
})
export class SharedHeadComponent implements OnInit {
  _msg:string = '';
  @Input() set msg(msg) {
    this._msg = msg? msg: 'welcome';
  } 
  get msg() {
    return this._msg;
  }
  @Input() canback: boolean;


  constructor() { }

  ngOnInit() {
  }

}
