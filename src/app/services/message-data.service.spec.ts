/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessageDataService } from './message-data.service';

describe('Service: MessageData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageDataService]
    });
  });

  it('should ...', inject([MessageDataService], (service: MessageDataService) => {
    expect(service).toBeTruthy();
  }));
});
