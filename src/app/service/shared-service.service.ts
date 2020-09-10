import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() onMainEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    console.log('shared service started');
  }
}
