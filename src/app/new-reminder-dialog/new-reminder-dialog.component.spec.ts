import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReminderDialogComponent } from './new-reminder-dialog.component';

describe('NewReminderDialogComponent', () => {
  let component: NewReminderDialogComponent;
  let fixture: ComponentFixture<NewReminderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReminderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReminderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
