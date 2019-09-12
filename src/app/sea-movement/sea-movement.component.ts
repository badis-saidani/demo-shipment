import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sea-movement',
  templateUrl: './sea-movement.component.html',
  styleUrls: ['./sea-movement.component.css']
})
export class SeaMovementComponent implements OnInit {

  @Input() shipment: any;

  constructor() { }

  ngOnInit() {
  }

}
