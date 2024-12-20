import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUsersComponent } from './m-users.component';

describe('MUsersComponent', () => {
  let component: MUsersComponent;
  let fixture: ComponentFixture<MUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
