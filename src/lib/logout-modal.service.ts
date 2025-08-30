import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutModalService {

  private visibleSubject = new BehaviorSubject<boolean>(false);
  visible$ = this.visibleSubject.asObservable();

  private confirmCallback: (() => void) | null = null;

  open(onConfirm?: () => void) {
    this.confirmCallback = onConfirm || null;
    this.visibleSubject.next(true);
  }

  close() {
    this.visibleSubject.next(false);
  }

  confirm() {
    if (this.confirmCallback) this.confirmCallback();
    this.close();
  }
}
