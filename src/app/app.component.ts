import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  isClicked: boolean = false;

  onClicked() {
    return (this.isClicked = this.username.length !== 0);
  }

  onReset() {
    this.username = '';
    this.isClicked = !this.isClicked;
  }
}
