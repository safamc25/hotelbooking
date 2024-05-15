import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms-details-more',
  templateUrl: './rooms-details-more.component.html',
  styleUrls: ['./rooms-details-more.component.css']
})
export class RoomsDetailsMoreComponent {
 
  tab: string = "";
 
  onOverViewClick() {
    this.tab = "overview"
  }
  onFacilitiesClick() {
    this.tab = "facilities"
  }
  onExtraClick() {
    this.tab = "extra"
  }

}
