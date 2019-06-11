import { TestBed } from '@angular/core/testing';

import { ToasthelperService } from './toasthelper.service';

describe('ToasthelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToasthelperService = TestBed.get(ToasthelperService);
    expect(service).toBeTruthy();
  });
});
