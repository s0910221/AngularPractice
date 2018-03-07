import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Handsome Man';
  url = 'https://www.google.com';
  try() {
    console.log('this is try');
  }
}
