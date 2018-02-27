import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable()
export class StorageWebService extends StorageService {

    constructor() {
        super();
    }

    setItem<T>(key: string, value: T): void {
        const valueStr = JSON.stringify(value);
        localStorage.setItem(key, valueStr);
    }
    getItem<T>(key: string): T {
        const valueStr = localStorage.getItem(key);
        return JSON.parse(valueStr);
    }
    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
    key(keyIndex: number): string {
        return localStorage.key(keyIndex);
    }
    clear(): void {
        localStorage.clear();
    }
}
