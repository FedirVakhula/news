import { Component } from '@angular/core';
import { CommunicationService } from './service/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';

  constructor(
    private communicationService: CommunicationService,
    private router: Router
    ) {

  }

  chooseNews(value?): void {
    this.communicationService.getNews(value).subscribe((data) => {
      this.communicationService.dataToNextNews.next(data);
      this.router.navigateByUrl('news');
    });
  }
}
