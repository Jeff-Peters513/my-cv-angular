import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "enter something!";
  title = 'my-cv';
  name: string= "Jeff Peters";
  address: string= "5786 Dunlap Road";
  phone: string= "513-305-1268";
  email: string= "peters.j@yahoo.com";
  displayWork: boolean = false;
  displayEdu: boolean = true;

  toggleWorkDisplay(): void {
    if (this.displayWork){
      this.displayWork = false;
    }
    else {
      this.displayWork = true;
    }
  }
}
