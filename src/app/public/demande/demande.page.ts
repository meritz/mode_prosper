import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.page.html',
  styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {

  constructor(
    public router: Router,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  soumettre(){
    this.router.navigate(['/login'])
  }
}
