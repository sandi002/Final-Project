import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async removeData(dataKey){
    await Preferences.remove({ key: dataKey });
  }
  async setData(dataKey,dataValue){
    await Preferences.set({ key: dataKey, value: dataValue });
  }
  async getData(dataKey){
    const token = await Preferences.get({ key: dataKey });
    return token.value;
  }
}
