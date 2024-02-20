import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-web-lib',
  template: `
    <p>
      <button>web library button</button>
      web-lib works!
    </p>
  `,
  styles: [],
})
export class WebLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

}
