import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Output() onConfirm = new EventEmitter();
  onOk() {
    this.onConfirm.emit({value: true});
  }
  onCancel() {
    this.onConfirm.emit({value: false});
  }
}
