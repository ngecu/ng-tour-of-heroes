import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `<h2>Weclome  {{person}} </h2> 
  
  <p>{{title}} is of length {{title.length}}

  <h1>Lets convert the person name to uppercase {{person.toUpperCase()}}
  

  <h3>{{greetUser()}}</h3>

  <h4>Site url is {{siteUrl}} </h4>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'Dev Ngecu';
   public siteUrl = window.location.href
   public person = "Robinson Nyamu"

   greetUser(){
    return ` Hello ${this.person}`;
   }
}
