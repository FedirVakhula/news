import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { INews } from '../models/news';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public dataToNextNews = new ReplaySubject(1);
  public inputUserPassword: string;
  public inputUserName: string;
  private fakeUser = {
    name: 'admin',
    password: '12345'
  };

  private urlNews = [
    // 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-13&sortBy=publishedAt&apiKey=4ba60064542f4f59b2ec7013c878e19a',
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ba60064542f4f59b2ec7013c878e19a',
    'https://newsapi.org/v2/everything?q=apple&from=2020-01-11&to=2020-01-11&sortBy=popularity&apiKey=4ba60064542f4f59b2ec7013c878e19a',
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4ba60064542f4f59b2ec7013c878e19a',
    'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4ba60064542f4f59b2ec7013c878e19a'
  ];

  constructor(
    public http: HttpClient,
    private router: Router
    ) { this.init(); }

  public getNews(value?): Observable<INews> {
    if (value === undefined) {
      return <Observable<INews>>this.http.get(this.urlNews[0]);
    } else {
      return <Observable<INews>>this.http.get(this.urlNews[value]);
    }
  }

  private init() {
    localStorage.setItem('user', JSON.stringify(this.fakeUser));
  }

  public getUser (): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.name === this.inputUserName && user.password === this.inputUserPassword) {
      return  true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
