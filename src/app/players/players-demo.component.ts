import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'players-demo',
  template: `
    <form [formGroup]="playersForm">
      <players-selector formControlName="players"></players-selector>
    </form>

    <hr/>
    Form value {{ playersForm.value | json }}
  `
})
export class PlayersDemoComponent implements OnInit {

  playersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.playersForm = this.formBuilder.group({
      players: new FormControl(4)
    });
  }
}
