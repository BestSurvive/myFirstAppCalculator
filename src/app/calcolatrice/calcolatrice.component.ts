import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent implements OnInit {
  public number1: number = 0;
  public num: number = 0;
  public result: number = 0;
  public operator: string;
  constructor() { }

  ngOnInit() {
  }
  public setOperator(id:string){
    this.operator = id;    
    this.num = Number(this.number1);
    this.number1 = 0;   
    this.result = 0;   
  }
  public calculate():number{
    if(this.operator === "+"){
      this.result += Number(this.number1) + Number(this.num);
    }else if(this.operator === "-"){
      this.result += Number(this.number1) - Number(this.num);
    }
    else if(this.operator === "*"){
      this.result += Number(this.number1) * Number(this.num);
    }
    else if(this.operator === "/"){
      this.result += Number(this.number1) / Number(this.num);
    }
    this.number1 = 0;
    this.num = 0;
    return this.result;   
      
  }

  public reset():void{
    this.number1 = 0;
    this.num = 0;
    this.result = 0;  
  }

}
