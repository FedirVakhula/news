import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/service/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private communicationService: CommunicationService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  public logout () {
    this.communicationService.inputUserName = '';
    this.communicationService.inputUserPassword = '';
    this.router.navigate(['/about']);
  }

}
