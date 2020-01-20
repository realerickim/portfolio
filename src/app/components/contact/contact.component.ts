import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Contact</h1>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      Find me on <a href="https://www.linkedin.com/in/realerickim/">LinkedIn</a>.
    </div>
  </section>`,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
