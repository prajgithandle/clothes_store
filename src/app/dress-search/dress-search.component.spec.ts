import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressSearchComponent } from './dress-search.component';

describe('DressSearchComponent', () => {
  let component: DressSearchComponent;
  let fixture: ComponentFixture<DressSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
