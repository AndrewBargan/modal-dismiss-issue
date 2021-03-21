import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-half-screen-modal',
  templateUrl: './half-screen-modal.component.html',
  styleUrls: ['./half-screen-modal.component.scss'],
})
export class HalfScreenModalComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close() {
    this.modal.dismiss();
  }
}
