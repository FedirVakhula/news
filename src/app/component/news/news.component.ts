import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationService } from 'src/app/service/communication.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  public news;
  private sub$;

  constructor(
    private communicationService: CommunicationService
    ) { }

  ngOnInit() {
    this.sub$ = this.communicationService.dataToNextNews.subscribe({
      next: data => {
      if (data) {
        this.news = data;
      }

    }});
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
