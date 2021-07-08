import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.scss'],
})
export class TeamModalComponent implements OnInit {
  @Input() show: any;

  constructor() {}
  ngOnInit(): void {}

  onSave() {
    // this.xyz;
    this.show = !this.show;
    console.log('Clciked', this.show);
  }
}
