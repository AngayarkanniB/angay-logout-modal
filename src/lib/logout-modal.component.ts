import { Component, Input, SimpleChanges } from '@angular/core';
import { LogoutModalService } from '../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angay-logout-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent {
  @Input() heading = 'Confirm Logout';
  @Input() message = 'Are you sure you want to logout?';
  @Input() confirmButtonText = 'Yes, Leave';
  @Input() cancelButtonText = 'Stay';

  isVisible = false;

  constructor(public modalService: LogoutModalService) { }

  ngOnInit(): void {
    this.modalService.visible$.subscribe((visible) => {
      this.isVisible = visible;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['heading']) {
      this.heading = changes['heading'].currentValue;
    }
    if (changes['message']) {
      this.message = changes['message'].currentValue;
    }
    if (changes['confirmButtonText']) {
      this.confirmButtonText = changes['confirmButtonText'].currentValue;
    }
    if (changes['cancelButtonText']) {
      this.cancelButtonText = changes['cancelButtonText'].currentValue;
    } 
  }

  close() {
    this.modalService.close();
  }

  confirm() {
    this.modalService.confirm();
  }
}
