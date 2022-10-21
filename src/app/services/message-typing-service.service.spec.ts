/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessageTypingService } from './message-typing-service.service';

describe('Service: MessageTypingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageTypingService]
    });
  });

  it('should ...', inject([MessageTypingService ], (service: MessageTypingService) => {
    expect(service).toBeTruthy();
  }));
});
