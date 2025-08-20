import { ValidatorFn } from "@angular/forms";

export function ingredientsValidator(): ValidatorFn {
    const regExp = new RegExp('^[A-Za-z]+(?:,\s[A-Za-z]+)*$');
    return(control) => {
        const isValid = control.value === '' || regExp.test(control.value);

        return isValid ? null: {ingredientsValidator: true};
    }
}