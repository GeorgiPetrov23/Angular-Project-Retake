import { ValidatorFn } from "@angular/forms";

export function ingredientsValidator(ingredientsControlName: string): ValidatorFn {
    const regExp = new RegExp('^[A-Za-z]+(, [A-Za-z]+)*$');
    return(control) => {
        const ingredientsFormControl = control.get(ingredientsControlName)
        const isValid = control.value === '' || regExp.test(control.value);

        return isValid ? null: {ingredientsValidator: true};
    }
}