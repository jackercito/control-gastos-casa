import { Component, HostListener } from '@angular/core';
import { Auth0Service } from './security/services/auth0.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'control-gastos';

  isCollapsed: Boolean = false;

  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private http: HttpClient, public auth: Auth0Service) {
    //auth.handleLoginCallback();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  sidenav() {
    if (this.innerWidth <= 1280) {
      this.isCollapsed = true;
    }
  }
}
