import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushedLetterComponent } from './pushed-letter.component';

describe('PushedLetterComponent', () => {
  let component: PushedLetterComponent;
  let fixture: ComponentFixture<PushedLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushedLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushedLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
