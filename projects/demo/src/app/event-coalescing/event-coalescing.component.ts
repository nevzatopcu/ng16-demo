import { Component } from '@angular/core';

// core.mjs => view.detectChanges()
@Component({
  standalone: true,
  styleUrls: ['./event-coalescing.component.scss'],
  template: `
    <div class="card p-3 shadow">
      <h2 class="text-center p-3">Required Inputs</h2>
      <div class="tab-content p-3 border bg-light">
        <div class="tab-pane active">
          <div (click)="onDivClick()" class="click-me">
            <button (click)="onButtonClick()">click me</button>
          </div>
        </div>
      </div>
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
