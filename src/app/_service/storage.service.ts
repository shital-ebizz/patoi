import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private key: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() { }

  encrypt(txtToEncrypt: string): string {
    return CryptoJS.AES.encrypt(txtToEncrypt, this.key).toString();
  }
  decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}

