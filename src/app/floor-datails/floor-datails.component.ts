import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FloorsService } from '../services/floors.service';
import { SocketIoService } from '../services/socket-io.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IResponse } from '../interfaces/response.interface';
import { IBtnControl } from '../interfaces/btnControl.interface';
@Component({
  selector: 'app-floor-datails',
  templateUrl: './floor-datails.component.html',
  styleUrls: ['./floor-datails.component.scss']
})
export class FloorDatailsComponent implements OnInit {

  btnControl: IBtnControl = {};
  pCount = 1;
  isLoaded = false;
  color: string;
  floor: any;
  id: string;
  constructor(
    private floorsService: FloorsService,
    private socketIO: SocketIoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.socketIO.getMessage('new update').subscribe(msg => {
      this.getFloorDetails(this.id);
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getFloorDetails(this.id);
  }

  getFloorDetails(id: string): void {
    this.floorsService.getFloorDetails(id).subscribe((res: IResponse) => {
      console.log(res);
      if (res.status === 200) {
        this.floor = res.success.results;
        this.getCountPercentage(res.success.results);
        this.btnSetup();
        this.isLoaded = true;
      }
    });
  }

  getCountPercentage(f: any): void {
    this.color = '';
    console.log(f);
    if (f.amount <= 150) {
      this.color = 'primary';
    } else if (f.amount >= 151 && f.amount <= 180) {
      this.color = 'accent';
    } else {
      this.color = 'warn';
    }
    console.log(this.color);
  }

  increaseFloorCount(): void {
    this.floorsService.increaseFloorCount(this.id, this.pCount).subscribe(res => {
      console.log(res);
    });
  }

  decreaseFloorCount(): void {
    this.floorsService.decreaseFloorCount(this.id, this.pCount).subscribe(res => {
      console.log(res);
    });
  }

  doSomething(e: Event): void {
    this.btnSetup();
  }

  btnSetup(): void {

    if ( (this.pCount + this.floor.amount) > this.floor.limit || this.pCount === null || this.pCount <= 0) {
      this.btnControl.add = true;
    } else {
      this.btnControl.add  = false;
    }

    if ( (this.floor.amount - this.pCount) <= 0 || this.pCount === null || this.pCount <= 0) {
      console.log(this.floor.amount - this.pCount);
      this.btnControl.remove = true;
    } else {
      this.btnControl.remove = false;
    }
  }

}
