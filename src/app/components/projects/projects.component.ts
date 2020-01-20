import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Projects</h1>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-4" *ngFor="let project of projects">
          <a href="{{project.url}}">
          <div class="card">
            <div class="card-image">
              <img src="{{project.image}}">
            </div>
            <div class="card-content">
              <p class="title is-4">{{project.name}}</p>
              <div class="content">
                {{project.caption}}
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;

  constructor() { }

  ngOnInit() {
    this.projects = [
      {name: 'WordSensei',
      caption: 'Word Sense Disambiguation algorithms using Wikipedia as a corpus.',
      image: '/assets/img/wordsensei.png',
      url: 'https://github.com/realerickim/WordSENSEI'},
      {name: 'WaveBrowser',
      caption: 'A Java-based web browser.',
      image: '/assets/img/javabrowser.jpg',
      url: 'https://github.com/realerickim/WaveBrowser'},
      {name: 'Eric\'s Travel Agency',
      caption: 'A vanilla HTML/CSS website.',
      image: '/assets/img/travelagency.png',
      url: 'https://realerickim.github.io/travel-company/'}
    ]
  }

}
