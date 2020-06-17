import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auth0Service } from './../../services/auth0.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
})
export class CallbackComponent implements OnInit {
  loggedInSub: Subscription;

  constructor(private auth: Auth0Service, private router: Router) {
    // Check for authentication and handle if hash present
    //auth.handleLoginCallback();
    this.router.navigate(['home'])
  }

  ngOnInit() {
  }
}
