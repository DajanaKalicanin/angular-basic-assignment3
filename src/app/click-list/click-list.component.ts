import { Component } from '@angular/core';

@Component({
  selector: 'app-click-list',
  templateUrl: './click-list.component.html',
  styles: [`
    .fifthPlusItemColor {
      color: white;
    }`]
})
export class ClickListComponent {
  textDisplayed = false;
  logs = [ ];
  logCounter = 0;

  onClickDetails() {
    this.textDisplayed = !this.textDisplayed;
    this.logs.push(new Date().toString());
    this.logCounter ++;
    console.log(this.logCounter);
  }

  getStyle(index) {
    console.log(index);
    return index >= 4 ? 'blue' : 'white';
  }
}
