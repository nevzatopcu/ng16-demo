import {
  Component,
  Directive,
  HostBinding,
  Input,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input({ required: true }) color!: 'primary' | 'warning';

  @HostBinding('class') get classes() {
    return `btn ${this.color === 'primary' ? 'btn-primary' : 'btn-warning'}`;
  }
}

@Directive({
  selector: '[appPrimaryButton]',
  standalone: true,
  hostDirectives: [
    {
      directive: ButtonDirective,
      inputs: ['color'],
    },
  ],
})
export class PrimaryButtonDirective {
  constructor() {
    inject(ButtonDirective).color = 'primary';
  }
}

@Component({
  selector: 'app-required-inputs-host-directive',
  template: `
    <div class="d-flex gap-4">
      <button type="button" appButton color="warning">warning button</button>

      <button type="button" appPrimaryButton color="warning">
        primary button
      </button>
    </div>
  `,
  standalone: true,
  imports: [PrimaryButtonDirective, ButtonDirective],
})
export class RequiredInputHostDirectiveComponent {}
