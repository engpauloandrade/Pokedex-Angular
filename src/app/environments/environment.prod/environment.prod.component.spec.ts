import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentProdComponent } from './environment.prod.component';

describe('EnvironmentProdComponent', () => {
  let component: EnvironmentProdComponent;
  let fixture: ComponentFixture<EnvironmentProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
