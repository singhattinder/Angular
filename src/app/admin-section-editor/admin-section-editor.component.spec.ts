import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionEditorComponent } from './admin-section-editor.component';

describe('AdminSectionEditorComponent', () => {
  let component: AdminSectionEditorComponent;
  let fixture: ComponentFixture<AdminSectionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSectionEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSectionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
