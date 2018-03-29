import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Output() fuck = new EventEmitter();
  // 输入属性拦截器
  _name: string;
  @Input()
  set name(res){
    if (res == undefined) {
      res = 'no one';
    }
    this._name =  res + " fuck you";
  }
  get name() {
    return this._name;
  }

  // ngChange 监听数据变化，返回一个simpleChanges 类对象，包含全部的输入属性
  @Input() sex: boolean;

  ngOnChanges(res) {
    console.log(res);
    for (let a in res) {
      console.warn(a);
      console.warn(JSON.stringify(res[a]));
    }
    console.log(res['sex'].previousValue);
    console.log(res['sex'].currentValue);
    
  }


  constructor() { }

  ngOnInit() {
    this.eat();
  }

  eat () {
    setTimeout(() => {
      console.log('going ..................................');
      this.fuck.emit( 'bite me!');
    },10000);
  }

}
