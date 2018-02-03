import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingRoomComponent } from './polling-room.component';

describe('PollingRoomComponent', () => {
  let component: PollingRoomComponent;
  let fixture: ComponentFixture<PollingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
