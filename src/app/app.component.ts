import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template:
  `
  <input [id]="myId" type="text" value="Robin">

  <input disabled={{isDisabled}} [id]="myId" type="text" value="Robin">
  
  <input bind-disabled=isDisabled [id]="myId" type="text" value="Robin">

  <input [disabled]=isDisabled [id]="myId" type="text" value="Robin">
  


  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'Dev Ngecu';
   public siteUrl = window.location.href
   public person = "Robinson Nyamu"
   public myId="x-d"
   public isDisabled = false

   greetUser(){
    return ` Hello ${this.person}`;
   }
}
