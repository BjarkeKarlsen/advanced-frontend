import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appPasswordEqual]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordEqualDirective, multi: true}],
  standalone: true,
})
export class PasswordEqualDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control)
    return passwordsEqual(control)
  }

}

export const passwordsEqual = function fullNameRequired(group: AbstractControl): ValidationErrors | null {
  return group.get('password')?.value != group.get('confirm_password')?.value ? { must_match: 'passwords must match' } : null
}
