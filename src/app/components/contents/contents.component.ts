import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  show: boolean = false;
  constructor() {}
  onSave() {
    this.show = !this.show;
    console.log(this.show, 'show');
  }

  ngOnInit(): void {}
}
