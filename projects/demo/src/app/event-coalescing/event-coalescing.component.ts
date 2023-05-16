import { Component } from '@angular/core';

// core.mjs => view.detectChanges()
@Component({
  standalone: true,
  styleUrls: ['./event-coalescing.component.scss'],
  template: `
    <div (click)="onDivClick()">
      <button (click)="onButtonClick()">click me</button>
    </div>
  `,
})
export default class EventCoalescingComponent {
  onDivClick() {
    console.log('div clicked');
  }

  onButtonClick() {
    console.log('button clicked');
  }
}
