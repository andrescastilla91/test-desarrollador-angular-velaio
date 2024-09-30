import { FormGroup } from "@angular/forms";

export interface ToastNotifications {
    customMessage?: string;
    validationForm?: boolean;
    form?: FormGroup;
}