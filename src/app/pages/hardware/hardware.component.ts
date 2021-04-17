import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss'],
})
export class HardwareComponent implements OnInit {

  tiposComunicacao: string[] = ["Estação Cliente", "Roteador"];

  constructor() { }

  ngOnInit() {}

}
