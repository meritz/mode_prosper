import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.page.html',
  styleUrls: ['./dashboard-admin.page.scss'],
})
export class DashboardAdminPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signOut() {
    this.auth.signOut();
  }

}
