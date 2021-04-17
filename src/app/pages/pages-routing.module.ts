import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HardwareComponent } from './hardware/hardware.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'hardware',
    component: HardwareComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
