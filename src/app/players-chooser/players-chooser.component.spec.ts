import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersChooserComponent } from './players-chooser.component';

describe('PlayersChooserComponent', () => {
  let component: PlayersChooserComponent;
  let fixture: ComponentFixture<PlayersChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
