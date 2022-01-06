import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes:Quote[]=[
    new Quote("Domie","Kiprono", "If love is not us then we have no God!", new Date())
  ]

  endFunction(x:any){
  x.timePosted=new Date(x.timePosted)
  this.quotes.push(x)
  }
}
