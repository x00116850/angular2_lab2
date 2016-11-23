import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-binding',
  templateUrl: './two-binding.component.html',
  styleUrls: ['./two-binding.component.css']
})
export class TwoBindingComponent implements OnInit {

  constructor(public id: number,public name:string,public power:string,public alterego?:string) {
    
    

   }

  ngOnInit() {
  }

}
