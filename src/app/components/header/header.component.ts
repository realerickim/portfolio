import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item"><img src="./assets/img/logo.png"></a>
      </div>
      <div class="navbar-start">
        <a class="navbar-item" routerLink =""><span>Home</span></a>
        <a class="navbar-item" routerLink="projects"><span>Projects</span></a>
        <a class="navbar-item" routerLink="contact"><span>Contact</span></a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-item:hover {
      background-color: hsl(171, 100%, 41%);
      filter: brightness(80%);
    }
    .navbar-item span {
      color: white;
    }
    img:focus{
    outline: 0 !important;
    border:0 none !important;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
