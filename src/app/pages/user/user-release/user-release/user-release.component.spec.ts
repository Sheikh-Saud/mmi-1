import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReleaseComponent } from './user-release.component';

describe('UserReleaseComponent', () => {
  let component: UserReleaseComponent;
  let fixture: ComponentFixture<UserReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
