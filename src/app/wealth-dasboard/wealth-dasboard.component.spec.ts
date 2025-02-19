import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthDasboardComponent } from './wealth-dasboard.component';

describe('WealthDasboardComponent', () => {
  let component: WealthDasboardComponent;
  let fixture: ComponentFixture<WealthDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WealthDasboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WealthDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
