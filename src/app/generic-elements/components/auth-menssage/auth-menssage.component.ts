import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../../security/services/auth0.service'
//import { MessagingService } from '../../../generic-elements/services/messaging.service';

@Component({
  selector: 'app-auth-menssage',
  templateUrl: './auth-menssage.component.html',
  styleUrls: ['./auth-menssage.component.css']
})

export class AuthMenssageComponent implements OnInit {
  message;
  constructor(public auth: Auth0Service, /*private messagingService: MessagingService*/) { }

  ngOnInit() {
    /*const userId = this.auth.userProfile.sub;
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage*/
  }

}
