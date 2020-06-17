import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth0Service } from './../../../security/services/auth0.service'
import { style, state, animate, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class MenuComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(public auth: Auth0Service, private router: Router, private activatedRouter: ActivatedRoute) {  }

  ngOnInit(): void {
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }
}
