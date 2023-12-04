import { AbstractControl, ValidationErrors } from '@angular/forms';

export function CustomValidators(
  control: AbstractControl
): ValidationErrors | null {
  const regex = [/\\s/.test(control.value)];

  return regex ? { noSpaceAllowed: true } : null;
}
