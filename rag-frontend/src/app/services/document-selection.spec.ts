import { TestBed } from '@angular/core/testing';

import { DocumentSelection } from './document-selection';

describe('DocumentSelection', () => {
  let service: DocumentSelection;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentSelection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
