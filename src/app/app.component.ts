import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature: string = 'recipe';
  openDropdown: boolean = false;


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onDropdownClick() {
    this.openDropdown = !this.openDropdown;
  }
}
