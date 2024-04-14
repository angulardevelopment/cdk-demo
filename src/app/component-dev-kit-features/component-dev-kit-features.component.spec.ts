import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevKitFeaturesComponent } from './component-dev-kit-features.component';

describe('DevKitFeaturesComponent', () => {
  let component: DevKitFeaturesComponent;
  let fixture: ComponentFixture<DevKitFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevKitFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevKitFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
