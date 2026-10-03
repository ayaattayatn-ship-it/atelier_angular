import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Medicament } from './medicament';

describe('Medicament', () => {
  let component: Medicament;
  let fixture: ComponentFixture<Medicament>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medicament],
    }).compileComponents();

    fixture = TestBed.createComponent(Medicament);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
