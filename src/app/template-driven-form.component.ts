import {Component} from '@angular/core';

@Component({
  selector: 'template-driven-form',
  template: `
    <form #templateForm="ngForm">
      <el-counter name="counter" [(ngModel)]="counterValue"></el-counter>
    </form>

    <h1>Value</h1>
    <pre>{{ templateForm.value | json }}</pre>
  `
})
export class TemplateDrivenFormComponent {
  counterValue = 5;
}
