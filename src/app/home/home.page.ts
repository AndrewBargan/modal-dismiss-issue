import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HalfScreenModalComponent } from '../half-screen-modal/half-screen-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async openHalfScreenModal() {

    const modal = await this.modalCtrl.create({
      component: HalfScreenModalComponent,
      mode: 'ios',
      cssClass: 'half-screen',
      backdropDismiss: true,
      swipeToClose: true,
    });

    modal.present();
  }
}
