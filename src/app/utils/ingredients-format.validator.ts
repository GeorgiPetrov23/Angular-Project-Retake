import { ValidatorFn } from "@angular/forms";

export function ingredientsValidator(ingredientsControlName: string): ValidatorFn {
    const regExp = new RegExp('^[A-Za-z]+ - [1-9]+g(, [a-zA-z]+ - [1-9]+g)*$');
    // '^[A-Za-z]+ - [0-9]+g.(\\n [A-Za-z]+ - [0-9]+g.)*$'
    return(control) => {
        const ingredientsFormControl = control.get(ingredientsControlName)
        const isValid = control.value === '' || regExp.test(control.value);

        return isValid ? null: {ingredientsValidator: true};
    }
}