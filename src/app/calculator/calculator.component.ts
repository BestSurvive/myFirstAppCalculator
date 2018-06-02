import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public number1 = 0;
  public number2 = 0;
  public result = 0;
  constructor() { }

  ngOnInit() {
    console.log("Calcolatrice");
    
  }

  calcolator(id):void{
    if(id==="+"){
      this.result = Number(this.number1) + Number(this.number2)
    }else if(id==="-"){
      this.result =  Number(this.number1) - Number(this.number2)
    }else if(id==="*"){
      this.result =  Number(this.number1) * Number(this.number2)
    }else  if(id==="/"){
      this.result = Number(this.number1) / Number(this.number2)
    }

  }
}
