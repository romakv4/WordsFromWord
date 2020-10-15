import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedWordComponent } from './created-word.component';

describe('CreatedWordComponent', () => {
  let component: CreatedWordComponent;
  let fixture: ComponentFixture<CreatedWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
