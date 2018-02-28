import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  openDropdown: boolean = false;
  constructor() { }

  onDropdownClick() {
    this.openDropdown = !this.openDropdown;
  }

}
