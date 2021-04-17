import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { RoomComponent } from './room/room.component';
import { HardwareComponent } from './hardware/hardware.component';



@NgModule({
  declarations: [
    RoomComponent,
    HardwareComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
