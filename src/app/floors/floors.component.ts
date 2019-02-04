import { Component, OnInit } from '@angular/core';
import { FloorsService } from '../services/floors.service';
import { IResponse } from '../interfaces/response.interface';
import { SocketIoService } from '../services/socket-io.service';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.scss']
})
export class FloorsComponent implements OnInit {

  floors: IResponse;
  floorOcupancy: number[] = [];
  isLoaded = false;
  color: string[] = [];
  constructor(
    private floorsService: FloorsService,
    private socketIO: SocketIoService
  ) {
    this.socketIO.getMessage('new update').subscribe(msg => {
      this.getFloorsList();
    });
  }

  ngOnInit() {
    this.getFloorsList();
  }


  getFloorsList(): void {
    this.floorsService.getFloors().subscribe((res: IResponse) => {
      this.floors = res;
      if (res.status === 200) {
        this.getCountPercentage(this.floors.success.results);
        this.isLoaded = true;
        console.log(this.floors);
      }
    });
  }

  getCountPercentage(f: [any] ): void {
    this.color = [];
    f.forEach(element => {
      if (element.amount <= 150) {
        this.color.push('primary');
      } else if (element.amount >= 151 && element.amount <= 180) {
        this.color.push('accent');
      } else {
        this.color.push('warn');
      }
    });
  }
}
