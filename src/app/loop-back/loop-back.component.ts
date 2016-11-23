import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  templateUrl: './loop-back.component.html',
  styleUrls: ['./loop-back.component.css']
})
export class LoopBackComponent implements OnInit {
values ="";
  constructor() { }
 onKey(event:any){
   this.values = event.target.value
 }
  ngOnInit() {
  }

}
