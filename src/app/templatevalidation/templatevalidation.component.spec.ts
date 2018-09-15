import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevalidationComponent } from './templatevalidation.component';

describe('TemplatevalidationComponent', () => {
  let component: TemplatevalidationComponent;
  let fixture: ComponentFixture<TemplatevalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatevalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
