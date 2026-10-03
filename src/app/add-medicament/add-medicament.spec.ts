import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMedicament } from './add-medicament';

describe('AddMedicament', () => {
  let component: AddMedicament;
  let fixture: ComponentFixture<AddMedicament>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMedicament],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMedicament);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
