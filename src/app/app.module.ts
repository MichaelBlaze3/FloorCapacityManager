import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Custom Modules
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';

// Components
import { AppComponent } from './app.component';
import { ViewersComponent } from './viewers/viewers.component';
import { FloorsComponent } from './floors/floors.component';
import { FloorDatailsComponent } from './floor-datails/floor-datails.component';
import { TopBarComponent } from './common/top-bar/top-bar.component';

// Services
import { FloorsService } from './services/floors.service';
import { SocketIoService } from './services/socket-io.service';


@NgModule({
  declarations: [
    AppComponent,
    ViewersComponent,
    FloorsComponent,
    FloorDatailsComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [ FloorsService, SocketIoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
