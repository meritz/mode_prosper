import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  pays:string="";
  constructor(
    public router: Router,
    public navCtrl: NavController,
    public toastController: ToastController
  ) {
    
   }

  ngOnInit() {
  }

 async accueil(){
if(this.pays=="")
  {const toast = await this.toastController.create({
    message: 'Veuillez renseigner le champ pays',
    duration: 500
  });
  toast.present();
  }else{
    const toast = await this.toastController.create({
      message: 'Sélection prise en compte',
      duration: 500
    });
    toast.present();
    this.router.navigate(
      ['/login']
   );
  }
}

}
