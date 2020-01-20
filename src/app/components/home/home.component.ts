import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-primary is-bold is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Eric Kim</h1>
        <h2 class="subtitle">UofT Computer Science Student and Software Developer.</h2>
      </div>
    </div>
</section>
  `,
  styles: [`
    .hero{
      background-image: url('./assets/img/toronto.jpg') !important;
      background-position: center center;
      background-size: cover;
    }
    h1{
      font-size: 10vw;
      text-shadow: 2px 2px black;
    }
    h2{
      font-size: 4vw;
      text-shadow: 2px 2px black;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
