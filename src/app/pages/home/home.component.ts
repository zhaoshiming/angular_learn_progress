import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hello: string;
  sex: boolean;
  arr: Array<string> = [
    'tomas',
    'javes',
    'go language',
    'es fuck webpack'
  ];
  constructor() { 
    this.hello = this.arr[0];
    this.sex = true;
  }

  ngOnInit() {
    this.changeHello();
  }
  changeHello(){
    setInterval(()=>{
      let cur = Math.floor(Math.random() * 10);

      let index = 0;
      if (cur < this.arr.length) index = cur;

      this.hello = this.arr[index];
      this.sex = !this.sex;
      console.log('current hello is:',this.hello);
    },5000);
  }

  fucked(payload) {
    console.log('fucked already................................');
    console.log(payload);
  }
}
