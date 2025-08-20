import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
    passwordcontrolName: string,
    rePasswordControlName: string
): ValidatorFn{
    return(control) => {
        const passwordFormControl = control.get(passwordcontrolName);
        const rePasswordFormControl = control.get(rePasswordControlName);

        const passswordsAreMatching = 
            passwordFormControl?.value === rePasswordFormControl?.value;

        return passswordsAreMatching ? null : { matchPasswordsValidator: true };
    };
}