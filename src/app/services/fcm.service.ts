import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { PostapiService } from './postapi.service';
import { FCM } from "@capacitor-community/fcm";

@Injectable({
  providedIn: 'root'
})
export class FcmService {
 
  constructor(private postapi: PostapiService) { }
 
  initPush() {
    if (Capacitor.getPlatform() !== 'web') {
      this.registerPush();
    }
  }
 
  private registerPush() {
    PushNotifications.requestPermissions().then((permission) => {
      if (permission.receive == 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
        
        FCM.subscribeTo({ topic: "all" })
        .then((r) => console.log("subscribed to topic: all"))
        .catch((err) => console.log(err));
      } else {
        // No permission for push granted
      }
    });
 
    PushNotifications.addListener(
      'registration',
      (token: Token) => {
        console.log('My token: ' + token.value);
        this.updateToken(token.value);
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
        console.log(notification);
      }
    );
 
    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        console.log(notification);
      }
    );
  }
  
  updateToken(token){
    this.postapi.updateToken({"token":token}).subscribe(data=>{
      console.log(data);
    });
  }
}
