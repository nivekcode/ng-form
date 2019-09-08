import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'lotr-app',
  templateUrl: './lotr-app.component.html'
})
export class LotrAppComponent implements OnInit {

  public lotrform: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.lotrform = this.fb.group({
      character: new FormControl()
    });
  }
}
