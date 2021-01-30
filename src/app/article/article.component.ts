import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  votes: number;
  link: string;
  title: string;

  constructor() {
    this.votes = 10;
    this.link = 'http://angular.io';
    this.title = 'Angular';
  }

  ngOnInit(): void {
  }

  domain() {

  }

  voteUp() {
    this.votes++;
    return false;
  }

  voteDown() {
    this.votes--;
    return false;
  }

}
