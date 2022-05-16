import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdLogoComponent } from './id-logo.component';

describe('IdLogoComponent', () => {
  let component: IdLogoComponent;
  let fixture: ComponentFixture<IdLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
