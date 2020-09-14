import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() onAppCommonTemplate: EventEmitter<boolean> = new EventEmitter();
  @Output() onAppUsersTemplate: EventEmitter<boolean> = new EventEmitter();
  @Output() onAppWelcomeTemplate: EventEmitter<boolean> = new EventEmitter();
  @Output() onAppAdminView: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    console.log('shared service started');
  }
}
