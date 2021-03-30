import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodBoardComponent } from './mood-board.component';

describe('MoodBoardComponent', () => {
  let component: MoodBoardComponent;
  let fixture: ComponentFixture<MoodBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
