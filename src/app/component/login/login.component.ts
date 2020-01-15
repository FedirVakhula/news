import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/service/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private communicationService: CommunicationService,
    private router: Router
    ) { }

  public showMassageLogin = false;

  ngOnInit() {
  }

  public login(userName, password) {
    this.showMassageLogin = !this.communicationService.getUser();
    this.communicationService.inputUserName = userName;
    this.communicationService.inputUserPassword = password;
    this.router.navigate(['/profile']);
  }
}
