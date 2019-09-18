import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-players-chooser',
  templateUrl: './players-chooser.component.html',
  styleUrls: ['./players-chooser.component.css']
})
export class PlayersChooserComponent implements OnInit {

  playersFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.playersFormGroup = this.fb.group({
      players: new FormControl('Linoel Messi')
    });
  }

}
