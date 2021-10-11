import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitsComponent } from './ui-kits.component';

describe('UiKitsComponent', () => {
  let component: UiKitsComponent;
  let fixture: ComponentFixture<UiKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiKitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
