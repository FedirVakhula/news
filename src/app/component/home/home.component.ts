import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationService } from 'src/app/service/communication.service';
import { INews } from 'src/app/models/news';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public news: INews;

  public topics: Array<string> = [
    // 'Bitcoin',
    'Top business',
    'Apple',
    'TechCrunch',
    'Wall Street Journal'
  ];

  constructor(
    private communicationService: CommunicationService,
    private router: Router
    ) { }

  ngOnInit() {
    // this.communicationService.getNews().subscribe((data: INews) => this.news = data);
  }

  chooseNews(value?): void {
    this.communicationService.getNews(value).subscribe((data: INews) => {
      this.communicationService.dataToNextNews.next(data);
      this.router.navigateByUrl('news');
    });
  }

}
