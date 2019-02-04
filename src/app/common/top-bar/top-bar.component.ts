import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  control = false;
  constructor(
    private router: Router,
    private location: Location
  ) {
    // router.events.subscribe((val) => {
    //   if (location.path() !== '/floors' && location.path() !== '/public') {
    //     // this.route = location.path();
    //     console.log(location.path());
    //     this.control = true;
    //   } else {
    //     this.control = false;
    //   }
    // });
  }

  ngOnInit() {
    console.log(this.router.url);
  }

}
