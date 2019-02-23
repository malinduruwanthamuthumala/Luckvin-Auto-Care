// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
@Component({
  selector: 'app-mapcomponent',
  templateUrl: './mapcomponent.component.html',
  styleUrls: ['./mapcomponent.component.scss']
})
export class MapcomponentComponent {
  title: string = 'My first AGM project';
  lat: number = 5.9768;
  lng: number = 80.7136;
}
