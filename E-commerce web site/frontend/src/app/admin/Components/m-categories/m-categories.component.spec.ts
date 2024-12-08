import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCategoriesComponent } from './m-categories.component';

describe('MCategoriesComponent', () => {
  let component: MCategoriesComponent;
  let fixture: ComponentFixture<MCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
