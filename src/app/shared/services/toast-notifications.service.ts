import { EventEmitter, Injectable } from '@angular/core';
import { ToastNotifications } from '../interfaces/toast-notifications.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationsService {

  public dataToast: EventEmitter<ToastNotifications> = new EventEmitter<ToastNotifications>();
  
}
