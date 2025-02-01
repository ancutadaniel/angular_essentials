import { Component } from '@angular/core';

@Component({
  selector: 'app-version',
  standalone: true,
  template: '<div class="version"> Version 1.0.0</div>',
  styles: [
    `
      .version {
        text-align: center;
        padding: 1rem;
        color: #9965dd;
        font-size: 0.8rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #2a1b44;
      }
    `,
  ],
})
export class VersionComponent {}
