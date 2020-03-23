import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(public toastController: ToastController) { }

  ngOnInit() {}


  toast() {
    return this.toastController.create({
      message: 'This is a toast',
      duration: 2000
    }).then(res => {
      res.present();
    }).catch(err => {
      console.error(err);
    });
  }

}
