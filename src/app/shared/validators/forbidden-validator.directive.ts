import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenValidator]',
  providers: [{provide: NG_VALIDATORS,
              useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective {

  @Input() forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                              : null;
  }
}
