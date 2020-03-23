import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;


  constructor(public toastController: ToastController, private statusBar: StatusBar) { }

  ngOnInit() {
    this.statusBar.show();
  }


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

  toggleStatusBar() {
    if (this.statusBar.isVisible) {
        // do something
        this.statusBar.hide();
    } else {
        this.statusBar.show();
    }
  }

}
