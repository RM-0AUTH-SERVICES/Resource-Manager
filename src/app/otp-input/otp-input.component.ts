import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.css'],
})
export class OtpInputComponent implements AfterViewInit {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  @Input() numberOfBoxes = 6;
  @Output() otpChange = new EventEmitter<string>();
  @ViewChild('otpInput') otpInput!: ElementRef;

  otpValue = '';

  ngAfterViewInit() {
    this.setFocus(0);
  }

  onOtpInputChange(event: any, index: number) {
    if (event.inputType === 'delete' && this.otpValue.length > 0) {
      this.otpValue = this.otpValue.slice(0, -1);
    } else if (
      event.target.value.length === 1 &&
      index < this.numberOfBoxes - 1
    ) {
      this.otpValue += event.target.value;
      this.setFocus(index + 1);
    } else if (
      event.target.value.length === 1 &&
      index === this.numberOfBoxes - 1
    ) {
      this.otpValue += event.target.value;
      this.emitOtp();
    }
  }

  onOtpInputKeydown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && index > 0) {
      this.setFocus(index - 1);
    }
  }

  private setFocus(index: number) {
    const inputIndex = Math.min(index, this.numberOfBoxes - 1);
    const input = this.otpInputs.toArray()[inputIndex].nativeElement;
    input.focus();
  }

  private emitOtp() {
    this.otpChange.emit(this.otpValue);
  }
}
