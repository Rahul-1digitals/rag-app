import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPanel } from './document-panel';

describe('DocumentPanel', () => {
  let component: DocumentPanel;
  let fixture: ComponentFixture<DocumentPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
