import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-on',
  templateUrl: './update-on.component.html',
  styleUrls: ['./update-on.component.css']
})
export class UpdateOnComponent implements OnInit {

  updateOnForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.updateOnForm = this.fb.group({
      simpleInput: new FormControl('', {updateOn: 'blur'})
    });
  }

}
