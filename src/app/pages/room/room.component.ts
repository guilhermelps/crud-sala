import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {

  tiposAmbiente: string[] = ["Comportamental", "Laboratório", "Auditório", "Anfteatro", "Administrativo"];

  constructor() { }

  ngOnInit() {}

}
