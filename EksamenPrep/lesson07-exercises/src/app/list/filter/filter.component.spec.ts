import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  const expectedFilteredEntries = [{"id":"a6db4fcb-6899-4a64-bece-0f76672b05c4","make":"Acura","model":"Integra","year":1993,"vin":"WAUDH48HX7K532105"},]
  const expectedAllEntries = [{"id":"f5c1c335-7fe8-47c1-ad90-0533d43825ce","make":"Honda","model":"Accord","year":1995,"vin":"1G6DJ8EV6A0469082"},{"id":"a6db4fcb-6899-4a64-bece-0f76672b05c4","make":"Acura","model":"Integra","year":1993,"vin":"WAUDH48HX7K532105"}]


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update selected make', () => {
    const expectedValue = expectedAllEntries[0];
    let de: HTMLSelectElement = fixture.debugElement.query(By.css('.car-make-select')).nativeElement;
    de.value = de.options[0].value;
    de.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectMakeForm.value.make).toBe(expectedValue.make);
  })

  it('should update selected make', () => {
    const expectedValue = expectedAllEntries[0];
    let de: HTMLSelectElement = fixture.debugElement.query(By.css('.car-make-select')).nativeElement;
    de.value = '';
    de.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectMakeForm.value.make).toBe('');
  })

  it('should return null unfiltered list when cleared', () => {
    let de = fixture.debugElement.query(By.css('.clear'));
    fixture.detectChanges();
    expect(component.selectMakeForm.value.make).toBe(null);
    expect(component.cars).toHaveSize(expectedAllEntries.length);
  })
});
