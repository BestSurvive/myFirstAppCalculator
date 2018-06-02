import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public title:string= "my first App"
public num1:number=0;
public num2:number=0;
constructor(){}
  isNumber():number{
    if(!isNaN(Number(this.num1)) && !isNaN(Number(this.num2)))
    {
      return Number(this.num1)*Number(this.num2);
    }
    return 0;
  }
}
