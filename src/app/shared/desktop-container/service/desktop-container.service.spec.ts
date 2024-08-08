import { TestBed } from '@angular/core/testing';

import { DesktopContainerService } from './desktop-container.service';

describe('DesktopContainerService', () => {
  let service: DesktopContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
