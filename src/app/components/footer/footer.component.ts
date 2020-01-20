import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="footer">
    <div class="container">
      <div class="content has-text-centered">
        Made by <a href="http://twitter.com/realerickim">Eric Kim</a> using Angular and Bulma.
      </div>
    </div>
  </div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
