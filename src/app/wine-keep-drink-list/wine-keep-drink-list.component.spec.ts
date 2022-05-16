import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineKeepDrinkListComponent } from './wine-keep-drink-list.component';

describe('WineKeepDrinkListComponent', () => {
  let component: WineKeepDrinkListComponent;
  let fixture: ComponentFixture<WineKeepDrinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineKeepDrinkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineKeepDrinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
